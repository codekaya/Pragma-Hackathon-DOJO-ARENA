import Cancel from "/cancel.png";

export default function WalletModal({ setShowModal, connectors, connect }) {
  return (
    <div className="fixed z-30 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={() => setShowModal(false)}
        />
        <div
          className="relative flex flex-col align-bottom bg-[#02040A] border border-[#A2DAFF] rounded-lg text-left overflow-hidden shadow-xl transform transition-all py-20 my-80 w-[60vw] mx-auto"
          style={{
            border: "2px solid #4FCDF2",
            boxShadow: "0px 0px 3px rgba(0,231,255, 0.819083)",
            color: "#ffffff",
          }}
        >
          <img
            src={Cancel}
            alt="cancel"
            className="absolute top-5 right-5 w-10 h-10 cursor-pointer"
            onClick={() => setShowModal(false)}
          />
          <h1 className="relative text-[24px] font-bold text-center mx-auto">
            Choose a wallet provider
          </h1>
          <div className="flex flex-col justify-center items-center space-y-4 mt-4">
            {connectors.map((connector) => (
              <button
                key={connector.options.id}
                className="text-[14px] w-[15rem] text-white border border-[#A2DAFF] font-bold py-2 px-4 rounded-md hover:bg-[#C0E3FF] hover:text-[#2D3D89] hover:shadow-button_2 duration-300"
                onClick={() => connect(connector)}
              >
                {connector.options.id === "braavos"
                  ? "Braavos Wallet"
                  : connector.options.id === "argentX"
                  ? "Argent Wallet"
                  : connector.options.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
