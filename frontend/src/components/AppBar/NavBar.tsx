import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MobileDrawer } from "./MobileDrawer";
import { useAuthStore } from "@/stores/useAuthStore";

const pages = ["pokedex", "pokeguess"] as const;

export const NavBar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { user, loading } = useAuthStore();

  return (
    <header className=" bg-white shadow-md  py-2 flex items-center gap-15 md:pr-4 justify-between px-2 relative z-1 ">
      {/*Create a blur background for content*/}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs ${
          toggleDrawer ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setToggleDrawer(false)}
      ></div>

      {/*Logo and links for routes*/}
      <Link to="/" className="flex items-center gap-2 ">
        <img src="/PokeballLogo.png" alt="Pokeball" className="w-15" />
        <h1 className="tracking-widest text-2xl font-bold">PokéWorld</h1>
      </Link>
      <nav className="hidden md:block">
        <ul className="flex gap-4">
          {pages.map((page) => (
            <li key={page} className="uppercase font-semibold text-sm ">
              <Link to={`/${page}`}>{page}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {/*Sign in button for desktop*/}
      <div className="md:ml-auto   text-sm uppercase font-semibold transition-all duration-100 hidden md:block">
        {loading && <p>Loading...</p>}
        {!user && !loading && (
          <div className="flex gap-5">
            <Link
              to="/signin"
              className="rounded-full border-2 border-[var(--clr-red-main)] hover:border-[var(--clr-green-main)] px-4 py-1.5"
            >
              sign in
            </Link>

            <Link
              to="/signup"
              className="rounded-full border-2 border-[var(--clr-red-main)] hover:border-[var(--clr-green-main)] px-4 py-1.5"
            >
              sign up
            </Link>
          </div>
        )}
        {user && !loading && (
          <div className="px-4 py-1.5 border-2 rounded-full border-torch-red-600">
            <p className="tracking-wider">{user.username}</p>
          </div>
        )}
      </div>

      {/*Hamburger menu for mobile*/}
      <button
        className="md:hidden cursor-pointer "
        onClick={(e) => {
          e.stopPropagation();
          setToggleDrawer(!toggleDrawer);
        }}
      >
        <FaBars size={25} />
      </button>
      {toggleDrawer && <MobileDrawer isOpen={toggleDrawer} />}
    </header>
  );
};
