import Layout from "../components/Layout";
import Logo from "../assets/react.svg";
import DojoArena from "/dojo_arena.png";

function Intro() {
  return (
    <div className="flex flex-row items-center space-x-10 px-10 mt-10">
      <div className="bg-[#D8D8D8] min-w-[300px] min-h-[300px] " />
      <span>
        <p className="">
          Join a Survivor Game with your{" "}
          <span className="text-[#FF356D]">Starknet NFT community.</span> Be the
          last survivor and take all entry fees.
        </p>
        <br />
        <p className="font-light text-[14px]">
          To survive you need to increase your health with hunting, you can
          attack opponents and you can hide from attacks
        </p>
        <br />
        <p className="font-light text-[14px]">
          Dojo Arena is a on-chain survival boardgame built on Dojo.
        </p>
      </span>
    </div>
  );
}

function JoinAndRegister() {
  return (
    <div className="flex flex-row items-center space-x-10 mt-16 w-full px-20">
      <button className="bg-[#386A92] px-4 py-4 rounded-md w-full">
        <span>Join A Room!</span>
      </button>
      <button className="bg-[#02040A] px-4 py-4 rounded-md w-full">
        <span>Register Your NFT Collection</span>
      </button>
    </div>
  );
}

function Highlights() {
  return (
    <div className="flex flex-col text-center mt-10">
      <h2 className="text-[24px]">Highlights</h2>
      <div className="grid grid-cols-4 justify-items-center mx-auto gap-5 mt-12">
        <div className="flex flex-col space-y-2 justify-start py-2 px-2">
          <div className="bg-black border border-blue-600 px-12 py-4">
            <img src={Logo} alt="logo" className="w-20 h-20" />
          </div>
          <h3>No Token Advantage</h3>
          <p className="text-[11px]">
            Game tokens are destined to be dumped. So, in Dojo Arena there is
            only ETH / DAI token in gameplay.
          </p>
        </div>
        <div className="flex flex-col space-y-2 justify-start py-2 px-2">
          <div className="bg-black border border-blue-600 px-12 py-4">
            <img src={Logo} alt="logo" className="w-20 h-20" />
          </div>
          <h3>Winners Win ETH</h3>
          <p className="text-[11px]">
            In Dojo Arena you do not earn in-game token. You directly rewarded
            with $Eth. If you create a room you earn 1% total reward.
          </p>
        </div>
        <div className="flex flex-col space-y-2 justify-start py-2 px-2">
          <div className="bg-black border border-blue-600 px-12 py-4">
            <img src={Logo} alt="logo" className="w-20 h-20" />
          </div>
          <h3>Chance & Strategy</h3>
          <p className="text-[11px]">
            Rely on your chance & strategy not your tokens.
          </p>
        </div>
        <div className="flex flex-col space-y-2 justify-start py-2 px-2">
          <div className="bg-black border border-blue-600 px-12 py-4">
            <img src={Logo} alt="logo" className="w-20 h-20" />
          </div>
          <h3>For NFT Communities</h3>
          <p className="text-[11px]">
            Your Starknet NFT is more valuable now! Join a survivor game with
            your NFT community.
          </p>
        </div>
      </div>
    </div>
  );
}

function ToJoin() {
  return (
    <div className="flex flex-col text-center mt-20 space-y-4">
      <h2 className="text-[24px]">To Join A Game</h2>
      <div className="grid grid-cols-2 justify-items-center px-10 mx-auto gap-5">
        <div className="flex flex-col spcae-y-1 border-2 border-black justify-start py-2 px-2">
          <h3>Join a Room</h3>
          <p>
            If you are holding a Starknet NFT, you can join a room which
            prepared for your collection. Pay the entry fee, this entry fee
            cumulates for total reward.
          </p>
        </div>
        <div className="flex flex-col spcae-y-1 border-2 border-black justify-start py-2 px-2">
          <h3>Create a Room & Earn Ether</h3>
          <p>
            Start your own room & set the rules. If your game starts you earn 1%
            commision of total rewards.
          </p>
        </div>
      </div>
    </div>
  );
}

function ToSurvive() {
  return (
    <div className="flex flex-col text-center mt-16">
      <h2 className="text-[24px]">To Survive</h2>
      <p className="mt-2">
        In default game, each player is equal and starts with 2400 HP. Each
        epoch longs 6 hours and after the epoch ends you lose -600 health. Each
        epoch, you can do one of them.
      </p>
      <div className="grid grid-cols-3 justify-items-center mx-auto gap-5 mt-16">
        <div className="flex flex-col space-y-2 border-2 border-black text-center justify-start py-2 px-2">
          <div className="bg-[#D8D8D8] min-w-[100px] min-h-[100px] aspect-square" />
          <h3 className="text-[16px]">Hunting</h3>
          <h4 className="text-[13px]">Increase Your Health</h4>
          <p className="text-[12px]">
            Your champion can hunt for increase your health. However, you can
            kill yourself in hunting.
          </p>
        </div>
        <div className="flex flex-col space-y-2 border-2 border-black text-center justify-start py-2 px-2">
          <div className="bg-[#D8D8D8] min-w-[100px] min-h-[100px] aspect-square" />
          <h3 className="text-[16px]">ATTACKING</h3>
          <h4 className="text-[13px]">Kill Other Champions</h4>
          <p className="text-[12px]">
            You can decrease the health of another champion when you attack.
            Also, you can kill yourself when you attacking.
          </p>
        </div>
        <div className="flex flex-col space-y-2 border-2 border-black text-center justify-start py-2 px-2">
          <div className="bg-[#D8D8D8] min-w-[100px] min-h-[100px] aspect-square" />
          <h3 className="text-[16px]">HIDING</h3>
          <h4 className="text-[13px]">Be Untouchable For Next Turn</h4>
          <p className="text-[12px]">
            Hide is absolute movement and enables for next turn. (still be
            effected by starving)
          </p>
        </div>
      </div>
    </div>
  );
}

function ToWin() {
  return (
    <div className="flex flex-col text-center mt-16">
      <h2 className="text-[24px]">To Win</h2>
      <p>
        Be the Last Survivor. Win the 97% of the entry fees. More mods coming
        soon.
      </p>
    </div>
  );
}

function Rules() {
  return (
    <div className="flex flex-col text-center mt-20">
      <h2 className="text-[24px]">Rules: </h2>
      <ul className="">
        <li>Each turn you have a one move to play.</li>
        <li>Each turn you lose HP since starving.</li>
        <li>If you receive attack when you are hidding, it does not effect.</li>
        <li>Last survivor with highest HP wins the game.</li>
        <li>
          (Currently) Only holders of same NFT collection can be participate a
          game.
        </li>
      </ul>
      <div className="grid grid-cols-2 justify-items-center mx-auto gap-5 w-2/3 mt-20">
        <div className="flex flex-col justify-left border-2 border-white rounded-md">
          <h3> P2E </h3>
          <ul className="space-y-8">
            <li className="relative">
              <span>Provides in-game advantage</span>
              <span className="absolute top-0 -left-[9rem]">Token Holding</span>
            </li>
            <li className="relative">
              <span>Early Comers</span>
              <span className="absolute top-0 -left-[11.6rem]">
                Who has advantage
              </span>
            </li>
            <li> Financial Power has significant advantage on gameplay</li>
            <li className="relative">
              <span>Winner earns in-game token (to sell)</span>
              <span className="absolute top-0 -left-[9rem]">Winner Takes</span>
            </li>
            <li className="relative">
              <span>P2E’s are Complex</span>
              <span className="absolute top-0 -left-[8.1rem]">Complexity</span>
            </li>
            <li className="relative">
              <span>aligned with earning money</span>
              <span className="absolute top-0 -left-[8rem]">Philosophy</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-left border-2 border-green-400 rounded-md">
          <h3> Dojo Arena </h3>
          <ul className="space-y-8">
            <li> no in-game advantage </li>
            <li> Best Strategy Makers </li>
            <li> Best Strategy has significant advantage on gameplay </li>
            <li>Winner earns Ether Token</li>
            <li>It is easy, you play for fun.</li>
            <li>aligned with blockchain philosophy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Main() {
  return (
    <Layout>
      <img
        src={DojoArena}
        alt="dojo arena"
        className="w-1/3 ml-0 mr-auto pl-10"
      />
      <Intro />
      <JoinAndRegister />
      <Highlights />
      <ToJoin />
      <ToSurvive />
      <ToWin />
      <Rules />
    </Layout>
  );
}
