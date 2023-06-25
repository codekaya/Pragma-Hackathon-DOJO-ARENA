import DojoArena from "/logo.svg";
import { useAccount, useConnectors } from "@starknet-react/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import WalletModal from "./WalletModal";

export default function Header() {
  const { address, status } = useAccount();
  const { connectors, connect } = useConnectors();
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="flex justify-between items-center w-dojo mx-auto px-20 py-10">
      {showModal && status !== "connected" && (
        <WalletModal
          setShowModal={setShowModal}
          connectors={connectors}
          connect={connect}
        />
      )}
      <Link to="/" className="flex items-center">
        <img src={DojoArena} alt="Dojo Arena" className="w-40" />
      </Link>
      <nav className="flex items-center">
        <a href="#" className="text-[15px] mr-5">
          Game Center
        </a>
        <a
          href="https://dojoarena.notion.site/dojoarena/Dojo-Arena-bc3a6b8cb93d4ae6b72329ad4769dc9e"
          target="_blank"
          rel="noreferrer"
          className="text-[15px] mr-5"
        >
          More Info
        </a>
        {status === "connected" && (
          <Link to="/games" className="text-[15px] mr-5">
            Your Games
          </Link>
        )}
        <button
          className="bg-[#1E3249] text-white text-[11px] border border-white shadow-border_1 font-bold py-2 px-8 rounded-full"
          onClick={() => setShowModal(true)}
        >
          {status === "connected"
            ? address.slice(0, 6) + "..." + address.slice(-4)
            : "Connect Wallet"}
        </button>
      </nav>
    </header>
  );
}
