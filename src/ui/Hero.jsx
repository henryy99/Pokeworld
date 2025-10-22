function Hero() {
  return (
    <div
      className="flex flex-col-reverse md:h-[calc(100vh-4rem)] pb-50 md:pb-0  md:flex-row md:justify-center md:pt:0 justify-end pt-10 items-center px-10 gap-10
      "
    >
      <div className="md:w-2/5 space-y-5 mx-auto">
        <h1 className="text-5xl font-pixel uppercase text-center md:text-left">
          Welcome to the Pokeguess
        </h1>
        <p className="text-lg">
          A place where you can enjoy playing and testing your knowledge about
          pokemon. This is the first version of the website, the content will be
          improved in the future.
        </p>
        <div className="flex justify-center md:block">
          <button className="w-30 h-10 bg-red-main-300 text-white rounded-full font-bold tracking-wider">
            <a href="#" className="">
              Explore
            </a>
          </button>
        </div>
      </div>

      <div className=" md:w-3/5 ">
        <img
          src="https://images7.alphacoders.com/592/thumb-1920-592678.jpg"
          alt="Pokemon"
          className="opacity-80  rounded-md "
        />
      </div>
    </div>
  );
}

export default Hero;
