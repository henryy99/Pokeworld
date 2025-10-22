import { Link } from "react-router";

const games = [
  {
    id: 0,
    img_path: "/PokeGuess.png",
    name: "PokeGuess",
    description:
      "A Wordle-inspired game where you guess the Pokemon'name. You will get a limited attempts to guess the name correctly and a hint whenever you guess the wrong name. Like wordle, it also shows the corrected and wrong letter after each guess. The game use PokemonAPI for Pokemon data.",
    link_path: "/pokeguess",
  },
  {
    id: 1,
    img_path: "/Pokedex.png",
    name: "Pokedex Clone",
    description:
      "Pokédex App is an interactive encyclopedia for all things Pokémon. It allows you to search and explore Pokémon by name or ID, view their stats, abilities, types, and images, and learn more about their characteristics.",
  },
];

function GameIntroduction() {
  return (
    <div className="">
      <h1 className="text-center  text-5xl uppercase font-pixel  text-red-main-100">
        My game
      </h1>
      <hr className="w-8/9 mx-auto text-red-main-100 font-bold border-b-2" />
      <div className=" gap-10 grid py-5 px-4 grid-cols-[repeat(auto-fit,minmax(300px,600px))] justify-center">
        {games.map((item) => (
          <div className="flex flex-col gap-8 shadow-lg p-4 rounded-lg ">
            <img
              src={item.img_path}
              alt={item.name}
              className="h-50  mx-auto w-[70%]"
            />

            <div className="space-y-3 flex-1">
              {" "}
              <h1 className="text-center  text-4xl uppercase font-pixel  text-red-main-100">
                {item.name}
              </h1>
              <p className="">{item.description}</p>
            </div>
            <button className="mx-auto block w-40 h-12 bg-red-main-500 rounded-full uppercase font-bold text-white hover:bg-red-main-300 transition-all duration-500 justify-self-end">
              <Link to={item.link_path}>Play game</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameIntroduction;
