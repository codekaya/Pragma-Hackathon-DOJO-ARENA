import DojoArena from "/logo.svg";
import { useAccount, useConnectors } from "@starknet-react/core";
import { useState } from "react";

function WalletModal({ setShowModal, connectors, connect }) {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={() => setShowModal(false)}
        />
        <div className="flex flex-col align-bottom bg-[#02040A] rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-80">
          {connectors.map((connector) => (
            <button
              key={connector.options.id}
              className="bg-[#FFFFFF] text-black font-bold py-2 px-4 rounded-full w-[200px] mx-auto my-5"
              onClick={() => connect(connector)}
            >
              {connector.options.id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

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
      <div className="flex items-center">
        <img src={DojoArena} alt="Dojo Arena" className="w-40" />
      </div>
      <nav className="flex items-center">
        <a href="#" className="text-[15px] mr-5">
          Game Center
        </a>
        <a href="#" className="text-[15px] mr-5">
          More Info
        </a>
        {status === "connected" && (
          <a href="#" className="text-[15px] mr-5">
            Your Games
          </a>
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
