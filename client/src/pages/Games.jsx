import Layout from "../components/Layout";
import { useState } from "react";
import games_data from "../assets/games.json";

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

const ToggleSwitch = ({ leftLabel, rightLabel, onToggle }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <label className="relative w-[16rem] h-8 flex flex-row cursor-pointer select-none bg-[#02040A] border border-[#00CCFF] rounded-full">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        className="hidden appearance-none transition-colors cursor-pointer w-[14px] h-[10px] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 bg-red-500"
      />
      <span
        className={`w-[8rem] h-8 my-auto rounded-full transform transition-transform bg-[#1E3249] border border-white ${
          isChecked ? "translate-x-[8rem]" : ""
        }`}
      />
      <span className="absolute font-medium text-xs left-3 top-[6px] text-white">
        {leftLabel}
      </span>
      <span className="absolute font-medium text-xs right-12 top-[6px] text-white">
        {rightLabel}
      </span>
    </label>
  );
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
          className="bg-[#02040A77]  px-5 py-2 cursor-pointer duration-300"
          key={name}
          style={{
            border: selected === name ? "2px solid #4FCDF2" : "none",
            boxShadow:
              selected === name
                ? "0px 0px 3px rgba(0,231,255, 0.819083)"
                : "none",
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

  console.log(status);

  return (
    <div className="flex flex-row justify-between items-center border-2 border-[#246CBD] rounded-md pr-4">
      <img
        src={image}
        alt={title}
        className="min-w-[3rem] max-w-[3rem] h-[3rem]"
      />
      <div className="relative flex flex-col space-y-2 w-[12rem]">
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
      <span className="w-[5rem] relative text-[12px] text-right">
        {" "}
        {fee} ETH{" "}
      </span>
      <span className="w-[5rem] relative text-[12px] text-right">
        {reward} ETH
      </span>
      <span className="w-[8rem] text-[12px] text-right">
        {parseTimestamp(time)}
      </span>
      {has_nf && status === "Upcoming" && (
        <button className="text-[14px] w-[15rem] bg-[#3072A7] text-white border border-[#628EAB] font-bold py-2 px-4 rounded-full hover:bg-[#C0E3FF] hover:text-[#2D3D89] hover:shadow-button_2 duration-300">
          Register {fee} ETH
        </button>
      )}
      {!has_nf && status === "Upcoming" && (
        <button className="text-[14px] w-[15rem] bg-[#2B1753] text-white border-2 border-[#E74A98] font-bold py-2 px-4 rounded-full hover:shadow-button_2 duration-300">
          You Need To Buy This NFT
        </button>
      )}

      {status === "Ongoing" && participant && (
        <button className="text-[14px] w-[15rem] bg-[#17532C] border border-[#4AE7A7] shadow-border_1 text-white font-bold py-2 px-4 rounded-full hover:bg-[#40F880] hover:border-white hover:text-white hover:shadow-button_2 active:bg-[#225E37] active:border-[#4AE7A7] active:text-[#63F275] duration-300">
          Continue To Play
        </button>
      )}
      {status === "Ongoing" && !participant && (
        <button className="text-[14px] w-[15rem] bg-[#3072A7] text-white border border-[#628EAB] font-bold py-2 px-4 rounded-full hover:bg-[#C0E3FF] hover:text-[#2D3D89] hover:shadow-button_2 duration-300">
          Observe
        </button>
      )}

      {status === "Past" && winner && (
        <button className="text-[14px] w-[15rem] bg-[#17532C] border border-[#4AE7A7] shadow-border_1 text-white font-bold py-2 px-4 rounded-full hover:bg-[#40F880] hover:border-white hover:text-white hover:shadow-button_2 active:bg-[#225E37] active:border-[#4AE7A7] active:text-[#63F275] duration-300">
          Claim Your Reward
        </button>
      )}

      {status === "Past" && !winner && (
        <button className="text-[14px] w-[15rem] bg-[#3072A7] text-white border border-[#628EAB] font-bold py-2 px-4 rounded-full hover:bg-[#C0E3FF] hover:text-[#2D3D89] hover:shadow-button_2 duration-300">
          See Winners
        </button>
      )}
    </div>
  );
}

function RoomType(props) {
  const { type, count, value } = props;
  const [selected, setSelected] = useState(() => value);

  return (
    <div
      className="flex flex-row items-center space-x-2 cursor-pointer px-2 py-1 rounded-md"
      style={{
        color: selected ? "#246CBD" : "#FFFFFF",
        backgroundColor: selected ? "#FFFFFF" : "#50818F",
        opacity: selected ? 1 : 0.5,
      }}
      onClick={() => setSelected(!selected)}
    >
      <span>{selected}</span>
      {/* <div
        className="w-[1rem] h-[1rem] rounded-full border border-[#4FCDF2]"
        style={{
          backgroundColor: selected ? "#4FCDF2" : "#02040A",
        }}
      /> */}
      <h2 className="text-[12px]">{type}</h2>
      <h2 className="text-[12px]">({count})</h2>
    </div>
  );
}

function GameList(props) {
  const { selected } = props;
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-[100vw] bg-[#02040A77] border border-[#4FCDF2] shadow-border_2 py-2">
      <div className="w-dojo mx-auto pt-4 pb-20 space-y-4">
        <ToggleSwitch
          leftLabel={"Briq Collections"}
          rightLabel={"All "}
          onToggle={(newState) => setChecked(newState)}
        />
        <div className="flex flex-row space-x-2 items-center justify-start">
          <RoomType type={"Ducks Everywhere"} count={5} value={true} />
          <RoomType type={"Pixel Heroes"} count={2} value={true} />
          <RoomType type={"Stark Guardians"} count={5} value={false} />
          <RoomType type={"Stark Punks"} count={5} value={false} />
          <RoomType type={"Early Starkers"} count={3} value={false} />
        </div>

        {games_data
          .filter((game) => game.status + " Games" === selected)
          .filter((game) => (checked ? game.isBriq : true))
          .map((game) => {
            return (
              <GameCard
                key={game.id}
                image={randomCharacter()}
                title={game.collection_name}
                description={game.room_name}
                creator={game.room_master}
                player={game.player}
                capacity={game.capacity}
                fee={game.entry_fee}
                reward={game.total_reward}
                time={game.timestamp}
                status={game.status}
                has_nf={game.has_nft}
                participant={game.participated}
                winner={game.winner}
                first={game.first}
              />
            );
          })}
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
