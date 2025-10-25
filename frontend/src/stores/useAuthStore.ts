import { create } from "zustand";
import { toast } from "sonner";
import { authService } from "@/services/authService";
import type { AuthState } from "@/types/store";

export const useAuthStore = create<AuthState>((set, get) => ({
  accessToken: null,
  user: null,
  loading: false,

  clearState: () => set({ accessToken: null, user: null, loading: false }),
  setAccessToken: (token) => set({ accessToken: token }),
  getUsername: () => {
    const { user } = get();
    return user ? user.username : "Guest";
  },
  signUp: async (username, password, email, displayName) => {
    try {
      set({ loading: true });

      await authService.signUp(username, password, email, displayName);
      toast.success("Sign Up Successful!");
    } catch (error) {
      console.error("Sign Up Error:", error);
      toast.error("Failed to sign up. Please try again.");
    } finally {
      set({ loading: false });
    }
  },
  signIn: async (username, password) => {
    try {
      set({ loading: true });
      const { accessToken } = await authService.signIn(username, password);
      get().setAccessToken(accessToken);

      await get().fetchMe();
      toast.success("Sign In Successful!");
    } catch (error) {
      console.error("Sign In Error:", error);
      toast.error("Failed to sign in. Please try again.");
    } finally {
      set({ loading: false });
    }
  },
  signOut: async () => {
    try {
      get().clearState();
      await authService.signOut();
      toast.success("Signed out successfully.");
    } catch (error) {
      console.error("Sign Out Error:", error);
      toast.error("Failed to sign out. Please try again.");
    }
  },
  fetchMe: async () => {
    try {
      set({ loading: true });
      const user = await authService.fetchMe();
      set({ user });
    } catch (error) {
      console.error("Fetch Me Error:", error);
      set({ user: null, accessToken: null });
      toast.error("Error fetching user data. Please sign in again.");
    }
  },
  refresh: async () => {
    try {
      set({ loading: true });
      const { user, fetchMe, setAccessToken } = get();
      const accessToken = await authService.refresh();
      setAccessToken(accessToken);

      if (!user) {
        await fetchMe();
      }
    } catch (error) {
      console.error("Refresh Token Error:", error);
      toast.error("Session expired. Please sign in again.");
      get().clearState();
    } finally {
      set({ loading: false });
    }
  },
}));
