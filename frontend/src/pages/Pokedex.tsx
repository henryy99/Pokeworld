import { Button } from "@/components/ui/button";
import api from "@/lib/axios";
import { useAuthStore } from "@/stores/useAuthStore";
import React from "react";
import { toast } from "sonner";

const Pokedex = () => {
  const { signOut } = useAuthStore();
  async function handleOnClick() {
    await signOut();
  }
  async function handleTest() {
    try {
      await api.get("/user/test", { withCredentials: true });
      toast.success("Test route successful!");
    } catch (error) {
      console.error("Test route error:", error);
      toast.error("Test route failed. Check console for details.");
    }
  }
  return (
    <>
      <Button onClick={handleOnClick}>Sign out</Button>
      <Button onClick={handleTest}>Test</Button>
    </>
  );
};

export default Pokedex;
