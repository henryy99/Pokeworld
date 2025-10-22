import { useRef } from "react";
import { useUser } from "../context/UserContext";

function GetUserName() {
  const usernameRef = useRef();
  const { setUser } = useUser();
  function handleSubmitUsername(e) {
    e.preventDefault();
    if (!usernameRef.current.value) return;
    setUser(usernameRef.current.value);
  }

  function handlePlayAsGuess() {
    setUser("Guest");
  }
  return (
    <div className="w-[80%] h-[50%] bg-white shadow-lg rounded-md flex flex-col items-center justify-center gap-5 pb-5 max-w-[500px]">
      <img src="/pokeball.png" alt="pokeball" className="w-10" />
      <h1 className="text-5xl uppercase">Guess them all</h1>
      <form
        className="w-full mx-auto text-center space-y-2.5 "
        onSubmit={handleSubmitUsername}
        name="getUser"
      >
        <input
          ref={usernameRef}
          type="text"
          className="block shadow-md rounded-full text-lg py-2 w-[80%] mx-auto text-center"
          placeholder="Enter your name"
          name="username"
          maxLength={10}
        />
        <p className="text-gray-400 text-sm">( Max 10 characters )</p>
        <input
          type="submit"
          value="Play"
          className="bg-red-main-300 border-0 text-white w-30 h-10 rounded-full text-xl hover:bg-red-main-100 font-pixel font-semibold cursor-pointer"
          name="btn-submit"
        />
      </form>
      <button
        className=" text-red-main-300  hover:text-red-main-100 font-semibold cursor-pointer"
        name="guest"
        onClick={() => handlePlayAsGuess()}
      >
        Play as guest
      </button>
    </div>
  );
}

export default GetUserName;
