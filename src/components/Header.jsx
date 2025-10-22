function Header() {
  console.log("Header");

  return (
    <div className="pokedex-header ">
      <div className="gap-4 bg-red-main flex h-[100px] pl-[10px] ">
        <div className="h-20 w-20 bg-white  rounded-full self-center relative border">
          <div className="h-15 w-15  bg-[#4AB1FA] rounded-full absolute top-[9px] left-[9px] border-3">
            <div className="bg-[#9DF8FF] w-10 h-10 rounded-full opacity-30"></div>
          </div>
        </div>

        <div className="flex items-start gap-3 pt-2">
          <div className="relative w-[30px] h-[30px] rounded-full bg-red-500 border-[3px] border-[#152345]">
            <div className="absolute top-[5px] left-[7px] w-[12px] h-[12px] rounded-full bg-white opacity-40" />
          </div>

          <div className="relative w-[30px] h-[30px] rounded-full bg-yellow-400 border-[3px] border-[#152345]">
            <div className="absolute top-[5px] left-[7px] w-[12px] h-[12px] rounded-full bg-white opacity-40" />
          </div>

          <div className="relative w-[30px] h-[30px] rounded-full bg-green-500 border-[3px] border-[#152345]">
            <div className="absolute top-[5px] left-[7px] w-[12px] h-[12px] rounded-full bg-white opacity-40" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
