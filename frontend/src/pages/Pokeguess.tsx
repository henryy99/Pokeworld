import { Button } from "@/components/ui/button";
import { getToday } from "@/lib/utils";
import { Link } from "react-router-dom";

export const Pokeguess = () => {
  const currentDate = getToday();
  return (
    <div
      className="flex min-h-svh flex-col items-center justify-center   absolute inset-0  z-0 "
      style={{
        backgroundImage: `
        radial-gradient(circle 600px at 0% 200px, #fce7f3, transparent),
        radial-gradient(circle 600px at 100% 200px, #fce7f3, transparent)
      `,
      }}
    >
      <div className="w-full  md:max-w-3xl  flex justify-center flex-col items-center gap-8 ">
        <div className="w-full md:max-w-lg text-center font-fredoka space-y-4">
          <img src="/PokeballLogo.png" alt="Logo" className="mx-auto w-16" />
          <h1 className="font-bold  text-4xl">Pokeguess</h1>
          <p className="text-3xl text-wrap text-center tracking-wider">
            Get 6 chances to guess the Pokémon of the day!
          </p>
        </div>
        <div className=" flex justify-around items-center w-full md:w-[80%] sm:flex-row flex-col gap-4">
          <Button
            className="rounded-full tracking-wider capitalize"
            size={"xl"}
            variant={"outline"}
          >
            <Link to="/pokeguess/play" className="w-30">
              How to play
            </Link>
          </Button>

          <Button
            className="rounded-full tracking-wider capitalize"
            size={"xl"}
            variant={"outline"}
          >
            <Link to="/pokeguess/play" className="w-30">
              play
            </Link>
          </Button>

          <Button
            className="rounded-full tracking-wider capitalize"
            size={"xl"}
          >
            <Link to="/pokeguess/play" className="w-30">
              play
            </Link>
          </Button>
        </div>
        <p className="font-semibold">{currentDate}</p>
      </div>
    </div>
  );
};
