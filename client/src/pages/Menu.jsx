import Layout from "../components/Layout";
import Lobby from "/lobby.png";

function Intro() {
  return (
    <div className="flex flex-row justify-center items-center space-x-10">
      <img src={Lobby} alt="Lobby" className="w-[20rem] h-[20rem]" />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[18px] font-bold">
          Dojo Arena is a game center where you can find web3 games to play with
          the communities of{" "}
          <span className="text-[#FF356D]">your Starknet NFTs.</span>
        </h1>
        <div className="flex flex-row items-center space-x-10 mt-16 w-full">
          <button className="bg-[#386A92] px-4 py-4 border-2 border-[#628EAB] rounded-md w-full shadow-button_1">
            <span>Connect Your Wallet</span>
          </button>
          <button className="bg-[#02040A] px-4 py-4 border-2 border-[#4FCDF2] rounded-md w-full">
            <span>Register Your NFT Collection</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function GameCard({ name, description, image }) {
  return (
    <div className="flex flex-col justify-center items-center bg-[#02040A] border border-[#4FCDF2] p-4 w-[15rem] h-[20rem] rounded-md">
      <img src={image} alt="Game" className="w-[10rem] h-[10rem]" />
      <h1 className="text-[15px] font-bold mt-5">{name}</h1>
      <h1 className="text-[11px] text-center">{description}</h1>
    </div>
  );
}

function Catalog() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 overflow-hidden">
      <h1 className="text-[24px] font-bold">Dojo Arena Games:</h1>
      <div className="relative flex w-[100vw] bg-[#00000099] justify-center items-center">
        <div className="flex flex-col justify-center items-center z-20 mx-auto pt-10">
          <span className="w-[60vw] text-center">
            <h1 className="text-[18px] font-light">
              Dojo Arena games are special token-based games designed on Dojo,
              allowing you to play games with community of “any” Starknet NFTs
              Collections .
            </h1>
            <br />
            <h2 className="text-[18px] font-light">
              Simply start a game and challenge your NFT community. All Dojo
              Arena games are developed within Dojo.
            </h2>
          </span>
          <div className="flex flex-row justify-center items-center space-x-10 mt-10 pb-10">
            <GameCard
              name="Arena Survivors"
              description="Be the last survivor. Earn all of the entry fees."
              image={Lobby}
            />
            <GameCard
              name="1v1 Duel"
              description="If you lost, you lost your NFT"
              image={Lobby}
            />
            <GameCard
              name="List Your Game"
              description="Reach us with our form"
              image={Lobby}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <Layout>
      <Intro />
      <Catalog />
    </Layout>
  );
}
