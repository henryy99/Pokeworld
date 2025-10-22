/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import { userInitialState, userReducer } from "./userReducer";
import { getRandomProfilePicture } from "../utils/helpers";

export const UserContext = createContext();
export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, userInitialState);
  const { username, profile_pic_path, health, highestScore, currentScore } =
    state;

  function setUser(name) {
    dispatch({ type: "USERNAME/SET", payload: name });
    dispatch({ type: "PROFILE_PIC/SET", payload: getRandomProfilePicture() });
  }

  function minusHealth() {
    dispatch({ type: "HEALTH/MINUS" });
  }

  function addScore(wrongs) {
    dispatch({ type: "CURRENT_SCORE/SET", payload: 80 - wrongs * 20 });
  }
  function playAgain() {
    dispatch({ type: "USER/RESET" });
  }

  return (
    <UserContext.Provider
      value={{
        username,
        profile_pic_path,
        health,
        highestScore,
        currentScore,
        setUser,
        addScore,
        playAgain,
        minusHealth,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
