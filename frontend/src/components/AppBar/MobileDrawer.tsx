import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface MobileDrawerProps {
  isOpen?: boolean;
}
const pages = ["pokedex", "pokeguess", "about", "contact"] as const;
export const MobileDrawer = ({ isOpen }: MobileDrawerProps) => {
  return (
    <div
      className={`h-full bg-white fixed top-0 w-2/3 right-0 z-10 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex flex-col gap-6 pt-10  items-center h-full">
        <Link to="/" className="flex items-center gap-2 ">
          <img src="/PokeballLogo.png" alt="Pokeball" className="w-15" />
          <h1 className="tracking-widest text-2xl font-bold">PokéWorld</h1>
        </Link>
        <hr className="w-full border-2 border-[var(--clr-red-main)]" />
        <ul className="w-full ">
          {pages.map((page) => (
            <li
              key={page}
              className="uppercase font-semibold text-lg mb-4 pl-10"
            >
              <Link to={`/${page}`}>{page}</Link>
            </li>
          ))}
        </ul>
        <div className="">
          <Link
            to="/login"
            className="px-4 py-1.5 text-sm uppercase font-semibold rounded-full border-2 border-[var(--clr-red-main)] hover:border-[var(--clr-red-dark)] transition-all duration-100 block "
          >
            sign in
          </Link>
        </div>

        {/*Bottom */}
        <div className="w-full h-30 bg-[var(--clr-red-main)] mt-auto flex flex-col gap-5 p-4 text-white">
          <div className="flex justify-center gap-3 text-3xl pt-8">
            <FaFacebook />
            <FaYoutube />
            <FaInstagram />
          </div>
          <p className=" text-xs text-center mt-auto">&copy; 2024 PokéWorld</p>
        </div>
      </div>
    </div>
  );
};
