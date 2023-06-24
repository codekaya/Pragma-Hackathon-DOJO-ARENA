import Layout from "../components/Layout";
import { useState } from "react";

const randomCharacter = () => {
  let index = Math.floor(Math.random() * 69 + 1);
  let path = "/characters/" + index + ".svg";
  return path;
};

const parseTimestamp = (timestamp) => {
  let seconds = Math.floor(timestamp / 1000) % 60;
  let minutes = Math.floor(timestamp / (1000 * 60)) % 60;
  let hours = Math.floor(timestamp / (1000 * 60 * 60)) % 24;
  let days = Math.floor(timestamp / (1000 * 60 * 60 * 24));

  let result = "";

  if (days > 0) {
    result += days + " D ";
  }
  if (hours > 0) {
    result += hours + " H ";
  }
  if (minutes > 0) {
    result += minutes + " M ";
  }
  if (seconds > 0) {
    result += seconds + " S ";
  }

  return result.trim();
};

function Intro() {
  return (
    <div className="flex flex-row justify-between items-center space-x-10">
      <div className="min-w-[400px] min-h-[200px] bg-[#FFFFFF] rounded-2xl shadow-lg p-5" />
      <div className="flex flex-col space-y-2">
        <h2>Game 1# : Hunter Punks Survival Game</h2>
        <p className="text-[12px]">
          Be the last survivor and earn all of the entry fees.
        </p>
        <p className="text-[12px]">
          To survive you need to increase your health with hunting, you can
          attack opponents and you can hide from attacks.
        </p>
        <p className="text-[12px]">check out notion for more info</p>
        <div className="flex flex-row space-x-2">
          <button className="text-[9px] bg-[#2275CF] text-white font-bold py-2 px-4 rounded-lg">
            Create Your Own Room
          </button>
          <button className="text-[9px] bg-[#1C4169] text-[#58ABDA] font-bold py-2 px-4 rounded-lg">
            Register Your NFT Collection
          </button>
        </div>
      </div>
    </div>
  );
}

function Filters(props) {
  const names = ["Upcoming Games", "Ongoing Games", "Past Games"];
  const { selected, setSelected } = props;

  return (
    <div className="flex flex-row ml-0 mr-auto mt-10">
      {names.map((name) => (
        <div
          className="bg-[#02040A77] border-[#4FCDF2] shadow-border_2 px-5 py-2 cursor-pointer"
          key={name}
          style={{
            border: selected === name ? "2px solid #4FCDF2" : "none",
            color: selected === name ? "#FFFFFF" : "#609CAD",
          }}
          onClick={() => setSelected(name)}
        >
          <h2>{name}</h2>
        </div>
      ))}
    </div>
  );
}

function GameCard(props) {
  const {
    image,
    title,
    description,
    creator,
    player,
    capacity,
    fee,
    reward,
    time,
    status,
    has_nf,
    participant,
    winner,
    first,
  } = props;

  return (
    <div className="flex flex-row justify-between items-center space-x-10 border-2 border-[#246CBD] rounded-md pr-4">
      <img src={image} alt={title} className="w-[3rem] h-[3rem]" />
      <div className="relative flex flex-col space-y-2">
        <h2>{title}</h2>
        <p className="text-[12px]">{description}</p>
        <p className="text-[12px]">by {creator}</p>
      </div>
      <div className="relative flex flex-col space-y-2">
        <span className="text-[12px]">
          {player} / {capacity}
        </span>
        {/* {first && (
          <span className="absolute -top-16 left-0 text-[12px]">Capacity</span>
        )} */}
      </div>
      <span className="relative text-[12px]"> {fee} ETH </span>
      <span className="relative text-[12px]"> {reward} ETH </span>
      <span className="text-[12px]"> {parseTimestamp(time)} </span>
      {has_nf && status === "Upcoming" && (
        <button className="text-[14px] bg-[#3072A7] text-white border border-[#628EAB] font-bold py-2 px-4 rounded-full hover:bg-[#C0E3FF] hover:text-[#2D3D89] hover:shadow-button_2 duration-300">
          Register ${fee} ETH
        </button>
      )}
      {!has_nf && status === "Upcoming" && (
        <button className="text-[14px] bg-[#2B1753] text-white border-2 border-[#E74A98] font-bold py-2 px-4 rounded-full hover:shadow-button_2 duration-300">
          You Need To Buy This NFT
        </button>
      )}

      {has_nf && status === "Ongoing" && participant && (
        <button className="text-[14px] bg-[#17532C] border border-[#4AE7A7] shadow-border_1 text-white font-bold py-2 px-4 rounded-full hover:bg-[#40F880] hover:border-white hover:text-white hover:shadow-button_2 active:bg-[#225E37] active:border-[#4AE7A7] active:text-[#63F275] duration-300">
          Continue To Play
        </button>
      )}
      {has_nf && status === "Ongoing" && !participant && (
        <button className="text-[14px] bg-[#3072A7] text-white border border-[#628EAB] font-bold py-2 px-4 rounded-full hover:bg-[#C0E3FF] hover:text-[#2D3D89] hover:shadow-button_2 duration-300">
          Observe
        </button>
      )}

      {has_nf && status === "Past" && winner && (
        <button className="text-[14px] bg-[#17532C] border border-[#4AE7A7] shadow-border_1 text-white font-bold py-2 px-4 rounded-full hover:bg-[#40F880] hover:border-white hover:text-white hover:shadow-button_2 active:bg-[#225E37] active:border-[#4AE7A7] active:text-[#63F275] duration-300">
          Claim Your Reward
        </button>
      )}

      {has_nf && status === "Past" && !winner && (
        <button className="text-[14px] bg-[#3072A7] text-white border border-[#628EAB] font-bold py-2 px-4 rounded-full hover:bg-[#C0E3FF] hover:text-[#2D3D89] hover:shadow-button_2 duration-300">
          See Winners
        </button>
      )}
    </div>
  );
}

function GameList(props) {
  const { selected } = props;
  const upcoming = [
    <GameCard
      key="1"
      image={randomCharacter()}
      title="Ducks Everywhere"
      description="Ducks Here"
      creator="napstart.stark"
      player={800}
      capacity={1000}
      fee={0.02}
      reward={16}
      time={1000 * 55 * 35 * 21}
      status="Upcoming"
      has_nf={true}
      participant={true}
      first={true}
    />,
    <GameCard
      key="2"
      image={randomCharacter()}
      title="Ducks Everywhere"
      description="Ducks Here"
      creator="napstart.stark"
      player={800}
      capacity={1000}
      fee={0.02}
      reward={16}
      time={1000 * 55 * 35 * 21}
      status="Upcoming"
      has_nf={false}
      participant={true}
      first={true}
    />,
    <GameCard
      key="3"
      image={randomCharacter()}
      title="Ducks Everywhere"
      description="Ducks Here"
      creator="napstart.stark"
      player={800}
      capacity={1000}
      fee={0.02}
      reward={16}
      time={1000 * 55 * 35 * 21}
      status="Upcoming"
      has_nf={true}
      participant={true}
      first={true}
    />,
  ];

  const ongoing = [
    <GameCard
      key="1"
      image={randomCharacter()}
      title="Ducks Everywhere"
      description="Ducks Here"
      creator="napstart.stark"
      player={800}
      capacity={1000}
      fee={0.02}
      reward={16}
      time={1000 * 55 * 35 * 21}
      status="Ongoing"
      has_nf={true}
      participant={true}
      first={true}
    />,
    <GameCard
      key="2"
      image={randomCharacter()}
      title="Ducks Everywhere"
      description="Ducks Here"
      creator="napstart.stark"
      player={800}
      capacity={1000}
      fee={0.02}
      reward={16}
      time={1000 * 55 * 35 * 21}
      status="Ongoing"
      has_nf={true}
      participant={false}
      first={true}
    />,
  ];

  const past = [
    <GameCard
      key="1"
      image={randomCharacter()}
      title="Ducks Everywhere"
      description="Ducks Here"
      creator="napstart.stark"
      player={800}
      capacity={1000}
      fee={0.02}
      reward={16}
      time={1000 * 55 * 35 * 21}
      status="Past"
      has_nf={true}
      participant={true}
      first={true}
      winner={true}
    />,
    <GameCard
      key="1"
      image={randomCharacter()}
      title="Ducks Everywhere"
      description="Ducks Here"
      creator="napstart.stark"
      player={800}
      capacity={1000}
      fee={0.02}
      reward={16}
      time={1000 * 55 * 35 * 21}
      status="Past"
      has_nf={true}
      participant={true}
      winner={false}
    />,
  ];
  return (
    <div className="w-[100vw] bg-[#02040A77] border border-[#4FCDF2] shadow-border_2 py-2">
      <div className="w-dojo mx-auto py-20 space-y-4">
        {selected === "Upcoming Games" && upcoming}
        {selected === "Ongoing Games" && ongoing}
        {selected === "Past Games" && past}
      </div>
    </div>
  );
}

export default function Games() {
  const [selected, setSelected] = useState("Upcoming Games");

  return (
    <Layout>
      <Intro />
      <Filters selected={selected} setSelected={setSelected} />
      <GameList selected={selected} />
    </Layout>
  );
}
