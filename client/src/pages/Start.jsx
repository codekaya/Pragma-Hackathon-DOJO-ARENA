import Layout from "../components/Layout";
import { useState } from "react";
import Cancel from "/cancel.png";

function Tooltip({ header, label }) {
  return (
    <div className="absolute bg-[#040810] -right-[6rem] px-4 py-2 top-0 flex flex-col justify-between border border-[#477f90] w-[10rem] ">
      <h2 className="text-[15px] font-bold text-center">{header}</h2>
      <hr className="border-[#4FCDF2] mt-2" />
      <label className="text-[12px] text-white mt-1">{label}</label>
    </div>
  );
}

function Input({ header, label, placeholder, disabled }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative flex flex-col justify-between"
      onMouseEnter={() => {
        setTimeout(() => {
          setHover(true);
        }, 500);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setHover(false);
        }, 500);
      }}
    >
      <h2
        className="text-[15px] font-bold "
        style={{ opacity: disabled ? 0.5 : 1 }}
      >
        {header}
      </h2>
      <label
        className="text-[12px] text-[#4FCDF2] mt-1"
        style={{ opacity: disabled ? 0.5 : 1 }}
      >
        {label}
      </label>
      <input
        className="bg-[#02040A] text-white px-5 py-2 mt-2 rounded-lg border border-[#4FCDF2] placeholder:text-center placeholder:text-[12px]"
        placeholder={placeholder}
        style={{ opacity: disabled ? 0.5 : 1 }}
      />
      {disabled && hover && (
        <Tooltip
          header={"Not Yet"}
          label={"This feature is not available yet."}
        />
      )}
    </div>
  );
}

function Modal(props) {
  let setShowModal = props.setShowModal;
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-[100vw] h-screen bg-black opacity-80 z-20" />
      <div className="fixed flex flex-col justify-between z-40 border border-[#4FCDF2] px-20 py-5 text-center space-y-2">
        <img
          src={Cancel}
          alt="cancel"
          className="absolute top-5 right-5 w-8 h-8 cursor-pointer"
          onClick={handleClose}
        />

        <h2 className="text-[24px] font-bold"> Congrats! Your Game Room </h2>
        <p className="text-[#4FCDF2]">
          You will receive %1 of the game reward if your game successfully ends!
        </p>
        <p className="text-[#4FCDF2]">It’s time to promote your game room!</p>
        <button className="bg-[#3072A7] text-white px-5 py-2 mx-auto w-[20rem] mt-2 rounded-3xl border border-[#628EAB] shadow-border_1">
          Share it on Twitter!
        </button>
      </div>
    </>
  );
}

export default function Start() {
  const [showModal, setShowModal] = useState(false);

  const headers = [
    "Name Your Room",
    "When Your Game Will Be Start?",
    "Enter Your NFTs Collection ID",
    "Enter Your Game Fee",
    "Set a Duration For a Turn",
    "Max Players",
    "Initial HP",
    "Hunger Level",
  ];
  const labels = [
    "Give a name for your room. Minimum 6 - Max 20 character allowed",
    "If there is less than 32 users, your game won’t start and your deposit return you later with 10% penalty + gas fees.",
    "Only owners of these NFT collection can join the game.",
    "It is the entry fee for joining your game. Minimum fee is 20 USDC.  (Fee * Game Participant = Total Reward) Our tool takes 2% commision and you earns %1 reward if your game starts.. ",
    "Enter a number for set it for per turn. Minimum is 10, Max is 240 minutes",
    "Enter a max number for your room.  Max number limit is 640 currently. Minimum is always 32 players.",
    "Your players starts with that HP. Minimum is 1200, recommended is 2400, Max is 5000.  Max HP is double of your initial HP.",
    "Enter the number of HP decrease per turn. Minimum is 0, recommended is 1/6x of your initial HP. Max is 1/4 of your initial HP.",
  ];
  const placeholder = [
    "10h-240h",
    "10h-240h",
    "-------------",
    "10h-240h",
    "10h-240h",
    "Unlimited",
    " Enter the Initial HP",
    "Enter the Hunger Level",
  ];
  const disabled = [false, false, false, false, false, false, true, true];
  const inputs = headers.map((header, index) => (
    <Input
      key={index}
      header={header}
      label={labels[index]}
      placeholder={placeholder[index]}
      disabled={disabled[index]}
    />
  ));

  const handleShowModal = () => setShowModal(true);

  return (
    <Layout>
      {showModal && <Modal setShowModal={setShowModal} />}
      <div className="flex flex-col w-dojo px-20">
        <h1 className="text-[58px]">Start A Room</h1>
        <div className="grid grid-cols-2 grid-rows-4 gap-5 items-stretch">
          {inputs}
        </div>
        <div className="grid grid-cols-2 mt-10 w-full space-x-2">
          <div className="flex flex-col justify-between w-1/2">
            <h2 className="text-[15px] font-bold">Reward Distribution </h2>
            <label className="text-[12px] text-[#4FCDF2] mt-1">
              Enter the reward mechanism when game ends. More info here.
            </label>
            <div className="flex flex-row justify-start space-x-2">
              <button className="bg-[#1C4169] text-[#58ABDA] text-[9px] px-5 py-2 mt-2 rounded-md border border-[#2C5A80]">
                Last Survivor Takes it All
              </button>
              <button className="bg-[#1C4169] text-[#58ABDA] text-[9px] px-5 py-2 mt-2 rounded-md border border-[#2C5A80]">
                HunterPunks Reward
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between w-1/2">
            <button
              className="bg-[#3072A7] text-white px-5 py-2 mt-2 rounded-3xl border border-[#628EAB]"
              onClick={handleShowModal}
            >
              Create Your Game Room
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
