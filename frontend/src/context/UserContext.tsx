// /* eslint-disable react-refresh/only-export-components */
// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   type ReactNode,
// } from "react";
// import { type Session } from "@supabase/supabase-js";
// import supabase from "../services/supabase";
// type GlobalStateProps = {
//   children: ReactNode;
// };
// // type UserAction = { type: "SET_SESSION"; payload: Session | null };

// type UserContextType = {
//   session: Session | null;
//   //   dispatch: React.Dispatch<UserAction>;
// };
// export const UserContext = createContext<UserContextType | undefined>(
//   undefined
// );
// export function UserProvider({ children }: GlobalStateProps) {
//   const [session, setSession] = useState<Session | null>(null);
//   // useEffect(() => {
//   //   supabase.auth.getSession().then(({ data }) => {
//   //     setSession(data.session);
//   //   });
//   //   const {
//   //     data: { subscription },
//   //   } = supabase.auth.onAuthStateChange((_event, session) => {
//   //     setSession(session);
//   //   });

//   //   return () => subscription.unsubscribe();
//   // }, []);
//   return (
//     <UserContext.Provider value={{ session }}>{children}</UserContext.Provider>
//   );
// }

// export function useUser() {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error("useUser must be used within a UserProvider");
//   }
//   return context;
// }
