import Layout from "../components/Layout";
import CivilRights from "/civil-rights.webp";
import Strategy from "/random.webp";
import SilverPot from "/silver-pot.webp";
import Web3 from "/web-3.webp";
import { Link } from "react-router-dom";
import Attack from "/attack.webp";
import Hide from "/hiding.webp";
import Hunt from "/hunt.webp";
import SurvivorGame from "/survivor_game.png";

function Intro() {
  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-10 px-10 mt-10">
      <img src={SurvivorGame} alt="Lobby" className="md:w-[20rem]" />
      <span>
        <p className="text-[18px] font-bold lg:mt-0 mt-5">
          Join a Survivor Game with your Starknet NFT community. Be the last
          survivor and take all entry fees.
        </p>
        <br />
        <p className="text-[18px] font-bold">
          To survive you need to increase your health with hunting, you can
          attack opponents and you can hide from attacks
        </p>
        <br />
        <p className="text-[18px] font-bold">
          Arena Survivors is a on-chain survival boardgame built on Dojo.
        </p>
      </span>
    </div>
  );
}

function JoinAndRegister() {
  return (
    <div className="flex flex-row items-center space-x-10 mt-16 w-full px-20">
      <Link
        to="/games"
        className="text-[14px] w-[15rem] text-center bg-[#3072A7] text-white border border-[#628EAB] font-bold py-4 px-4 rounded-md hover:bg-[#C0E3FF] hover:text-[#2D3D89] hover:shadow-button_2 duration-300"
      >
        <span>Play The Game!</span>
      </Link>
    </div>
  );
}

function Highlight({ image, title, description }) {
  return (
    <div className="flex flex-col space-y-2 justify-start py-2 px-2">
      <div className="bg-black px-12 py-4">
        <img src={image} alt="logo" className="w-20 h-20 mx-auto" />
      </div>
      <h3 className="text-[15px] font-bold">{title}</h3>
      <p className="text-[11px] font-normal">{description}</p>
    </div>
  );
}

function Highlights() {
  return (
    <div className="flex flex-col text-center mt-10">
      <h2 className="text-[24px]">Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center mx-auto gap-5 mt-12">
        <Highlight
          image={CivilRights}
          title="No Token Advantage"
          description="Game tokens are destined to be dumped. So, in Dojo Arena there is only ETH / DAI token in gameplay."
        />
        <Highlight
          image={SilverPot}
          title="Winners Win ETH"
          description="In Dojo Arena you do not earn in-game token. You directly rewarded with $Eth. If you create a room you earn 1% total reward."
        />
        <Highlight
          image={Strategy}
          title="Chance & Strategy"
          description="Rely on your chance & strategy not your tokens."
        />
        <Highlight
          image={Web3}
          title="For NFT Communities"
          description="Your Starknet NFT is more valuable now! Join a survivor game with your NFT community."
        />
      </div>
    </div>
  );
}

function ToJoin() {
  return (
    <div className="flex flex-col text-center mt-20 space-y-4">
      <h1 className="text-[24px] font-bold">
        More About Game#1 : Survival Game
      </h1>

      <h2 className="text-[24px] font-bold">To Join A Game</h2>
      <div className="grid md:grid-cols-2 justify-items-center px-10 mx-auto gap-5">
        <div className="flex flex-col spcae-y-1 border-2 border-black justify-start py-2 px-2 border-2 border-white shadow-border_1 rounded-lg ">
          <h3 className="text-[16px] font-bold">Join a Room</h3>
          <p className="text-[13px] font-light">
            If you are holding a Starknet NFT, you can join a room which
            prepared for your collection. Pay the entry fee, this entry fee
            cumulates for total reward.
          </p>
        </div>
        <div className="flex flex-col spcae-y-1 border-2 border-black justify-start py-2 px-2 border-2 border-white shadow-border_1 rounded-lg ">
          <h3 className="text-[16px] font-bold">Create a Room & Earn Ether</h3>
          <p className="text-[13px] font-light">
            Start your own room & set the rules. If your game starts you earn 1%
            commision of total rewards.
          </p>
        </div>
      </div>
    </div>
  );
}

function SurvivorCard({ image, title, subtitle, description }) {
  return (
    <div className="flex flex-col space-y-2 border-2 border-white shadow-border_1 text-center justify-start py-4 px-4">
      <img src={image} alt="logo" className="w-full mx-auto" />
      <h3 className="text-[16px]">{title}</h3>
      <h4 className="text-[13px]">{subtitle}</h4>
      <p className="text-[12px]">{description}</p>
    </div>
  );
}

function ToSurvive() {
  return (
    <div className="flex flex-col text-center mt-16">
      <h2 className="text-[24px]">To Survive</h2>
      <p className="mt-2 text-[12px] px-20 mx-auto">
        In default game, each player is equal and starts with 2400 HP. Each
        epoch longs 6 hours and after the epoch ends you lose -600 health. Each
        epoch, you can do one of them.
      </p>
      <div className="grid md:grid-cols-3 justify-items-center mx-auto gap-5 mt-16">
        <SurvivorCard
          image={Hunt}
          title="HUNTING"
          subtitle="Increase Your Health"
          description={
            "Your champion can hunt for increase your health. However, you can kill yourself in hunting."
          }
        />

        <SurvivorCard
          image={Attack}
          title="ATTACKING"
          subtitle="Kill Other Champions"
          description={
            "You can decrease the health of another champion when you attack. Also, you can kill yourself when you attacking."
          }
        />

        <SurvivorCard
          image={Hide}
          title="HIDING"
          subtitle="Be Untouchable For Next Turn"
          description={
            "Hide is absolute movement and enables for next turn. (still be effected by starving)"
          }
        />
      </div>
    </div>
  );
}

function ToWin() {
  return (
    <div className="flex flex-col text-center mt-16">
      <h2 className="text-[24px]">To Win</h2>
      <p className="text-[17px] w-2/3 mx-auto">
        Be the Last Survivor. Win the 97% of the entry fees. More mods coming
        soon.
      </p>
    </div>
  );
}

function Rules() {
  return (
    <div className="flex flex-col text-center mt-10 py-10">
      <h2 className="text-[24px]">Rules: </h2>
      <ul className="text-[17px]">
        <li>Each turn you have a one move to play.</li>
        <li>Each turn you lose HP since starving.</li>
        <li>If you receive attack when you are hidding, it does not effect.</li>
        <li>Last survivor with highest HP wins the game.</li>
        <li>
          (Currently) Only holders of same NFT collection can be participate a
          game.
        </li>
      </ul>
      <div className="grid grid-cols-2 justify-items-center mx-auto gap-5 lg:px-40 mt-20">
        <div className="flex flex-col justify-left border-2 border-white shadow-border_1 rounded-md py-4">
          <h3 className="text-[24px] font-bold"> P2E </h3>
          <ul className="flex flex-col juftify-between space-y-8 text-[12px] font-bold">
            <li className="relative">
              <span>Provides in-game advantage</span>
              <span className="hidden lg:block absolute top-0 -left-[7rem]">
                Token Holding
              </span>
            </li>
            <li className="relative">
              <span>Early Comers</span>
              <span className="hidden lg:block absolute top-0 -left-[9.1rem]">
                Who has advantage
              </span>
            </li>
            <li> Financial Power has significant advantage on gameplay</li>
            <li className="relative">
              <span>Winner earns in-game token (to sell)</span>
              <span className="hidden lg:block absolute top-0 -left-[7rem]">
                Winner Takes
              </span>
            </li>
            <li className="relative">
              <span>P2E’s are Complex</span>
              <span className="hidden lg:block absolute top-0 -left-[6.4rem]">
                Complexity
              </span>
            </li>
            <li className="relative">
              <span>aligned with earning money</span>
              <span className="hidden lg:block absolute top-0 -left-[6.5rem]">
                Philosophy
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-left border-2 border-green-400 shadow-border_1 rounded-md py-4">
          <h3 className="text-[24px] font-bold"> Dojo Arena </h3>
          <ul className="space-y-8 text-[12px] font-bold">
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

export default function Survivor() {
  return (
    <Layout bg="#000000">
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
