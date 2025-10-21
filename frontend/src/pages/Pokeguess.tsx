import { Link } from "react-router-dom";

export const Pokeguess = () => {
  return (
    <div>
      <div className="p-4 space-y-8 ">
        <h1 className=" text-4xl font-fredoka uppercase border-b-4 border-black pb-2 text-center">
          What is pokeguess?
        </h1>

        <img
          src="https://www.downloadyouthministry.com/dw/image/v2/BFBF_PRD/on/demandware.static/-/Sites-dym-master-catalog/default/dwba43f0a3/images/hi-res/w/h/who_sthatpokemon_preview2.jpg?sw=1200&sh=675&sm=fit"
          alt="Guess the Pokemon"
          className=" mx-auto rounded-md md:w-3/4"
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          distinctio, porro maxime aut aliquid impedit, quo fugiat ea cumque,
          beatae perferendis adipisci temporibus aperiam culpa? Fugiat
          laudantium temporibus sequi libero.
        </p>
        <div className="flex justify-center gap-4">
          {" "}
          <button className="border-1 w-35 h-10 rounded-full">
            How to play
          </button>
          <button className="w-35 h-10 rounded-full bg-[var(--clr-red-main)] text-white">
            <Link to="/pokeguess/play">Play</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
