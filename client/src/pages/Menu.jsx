import Layout from "../components/Layout";
import Lobby from "/lobby.png";
import { Link } from "react-router-dom";
import MenuBg from "/menu-bg.png";
import SurvivorGame from "/survivor_game.png";
import DuelGame from "/1v1_game.png";
import ListGame from "/list_game.png";
import { useState } from "react";
import WalletModal from "../components/WalletModal";

import { useAccount, useConnectors } from "@starknet-react/core";

function Intro() {
  const { status } = useAccount();
  const { connectors, connect } = useConnectors();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-row justify-center items-center space-x-10">
      {showModal && status !== "connected" && (
        <WalletModal
          setShowModal={setShowModal}
          connectors={connectors}
          connect={connect}
        />
      )}
      <img src={Lobby} alt="Lobby" className="w-[20rem] h-[20rem]" />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[18px] font-bold">
          Dojo Arena is a game center where you can find web3 games to play with
          the communities of{" "}
          <span className="text-[#FF356D]">your Starknet NFTs.</span>
        </h1>
        <div className="flex flex-row items-center space-x-10 mt-16 w-full">
          <button
            className="text-[14px] w-[15rem] bg-[#3072A7] text-white border border-[#628EAB] font-bold py-4 px-4 rounded-md hover:bg-[#C0E3FF] hover:text-[#2D3D89] hover:shadow-button_2 duration-300"
            onClick={() => setShowModal(true)}
          >
            <span>
              {" "}
              {status === "connected" ? "Connected" : "Connect Wallet"}
            </span>
          </button>
          <button className="bg-[#02040A] px-4 py-4 border-2 border-[#4FCDF2] rounded-md w-full text-[14px] font-bold text-[#4FCDF2] hover:bg-[#4FCDF2] hover:text-black hover:shadow-button_2 duration-300">
            <span>Register Your NFT Collection</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function GameCard({ name, description, image, link }) {
  return (
    <Link
      to={link}
      className="flex flex-col justify-between items-center bg-[#02040A] border border-[#4FCDF2] p-4 w-[15rem] h-[17rem] rounded-md transform hover:-translate-y-2 duration-300"
    >
      <img
        src={image}
        alt="Game"
        className="w-[100%] h-[8rem] object-cover rounded-md"
      />
      <h1 className="text-[15px] font-bold mt-5">{name}</h1>
      <h1 className="text-[11px] text-center">{description}</h1>
    </Link>
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
              link="/survivor"
              image={SurvivorGame}
            />
            <GameCard
              name="1v1 Duel"
              description="If you lost, you lost your NFT"
              link="/duel"
              image={DuelGame}
            />
            <GameCard
              name="List Your Game"
              description="Reach us with our form"
              link="/list"
              image={ListGame}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <Layout bg_url={MenuBg}>
      <Intro />
      <Catalog />
    </Layout>
  );
}
