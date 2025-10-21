import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/useAuthStore";
import React from "react";

const Pokedex = () => {
  const { signOut } = useAuthStore();
  async function handleOnClick() {
    await signOut();
  }
  return (
    <>
      <Button onClick={handleOnClick}>Sign out</Button>
    </>
  );
};

export default Pokedex;
