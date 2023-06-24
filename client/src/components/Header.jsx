import DojoArena from "/dojo_arena.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-dojo mx-auto px-20 py-10">
      <div className="flex items-center">
        <img src={DojoArena} alt="Dojo Arena" className="w-20" />
      </div>
      <nav className="flex items-center">
        <a href="#" className="text-[15px] font-bold mr-5">
          Game Center
        </a>
        <a href="#" className="text-[15px] font-bold mr-5">
          More Info
        </a>
        <button className="bg-[#FFFFFF] text-black font-bold py-2 px-4 rounded-full">
          Connect Wallet
        </button>
      </nav>
    </header>
  );
}
