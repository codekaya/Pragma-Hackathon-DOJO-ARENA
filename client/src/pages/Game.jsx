import Layout from "../components/Layout";
import Survival from "/survival.png";

const randomCharacter = () => {
  let index = Math.floor(Math.random() * 69 + 1);
  let path = "/characters/" + index + ".svg";
  return path;
};

function Information({ label, value }) {
  return (
    <div className="flex flex-col text-center">
      <label className="text-[12px] text-[#848896] mt-1">{label}</label>
      <label className="text-[15px] text-white mt-1">{value}</label>
    </div>
  );
}

function Doing({ header, number_of_people }) {
  return (
    <div className="flex flex-col text-center">
      <label className="text-[15px] text-white mt-1">{header}</label>
      <div className="grid grid-cols-4 flex-wrap justify-center mt-2 max-h-[10rem] overflow-auto gap-y-5">
        {Array(parseInt(number_of_people))
          .fill()
          .map((_, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center space-y-1"
            >
              <img
                src={randomCharacter()}
                alt="Character"
                className="max-w-[2rem] aspect-square mx-auto"
              />
              <div
                className="h-[0.5rem] w-[2rem] rounded-lg"
                style={{
                  background: Math.random() > 0.5 ? "#4FCDF2" : "#F2C94C",
                }}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="flex flex-col max-w-[20vw] min-w-[20vw] ">
      <img src={Survival} alt="Survival" className="w-[18vw]" />
      <div className="w-full flex flex-row justify-between bg-[#2E5577] h-[10rem] px-12 py-10 border-2 border-[#246CBD] rounded-lg mt-4">
        <img src={randomCharacter()} alt="Character" className="" />
      </div>
      <input
        className="bg-[#02040A88] text-white px-5 py-1 mt-5 rounded-lg border border-[#4FCDF2] placeholder:text-center placeholder:text-[12px]"
        placeholder="Name Your Champion"
      />
    </div>
  );
}

function Middle() {
  return (
    <div className="flex flex-col max-w-[40vw] min-w-[40vw]">
      <div className="flex flex-row justify-between bg-[#02040Aaa] border-2 border-[#4FCDF2] py-4 px-10 rounded-lg">
        <Information label={"Survivors"} value={"800 / 100"} />
        <Information label={"Current turn"} value={"12"} />
        <Information label={"Remaining Time"} value={"3:42.05"} />
        <Information label={"Total Prize"} value={"$10.000"} />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 justify-between bg-[#02040Aaa] border-2 border-[#4FCDF2] py-4 px-10 rounded-lg mt-2 gap-4">
        <Doing header={"Hunting"} number_of_people={"24"} />
        <Doing header={"Hiding"} number_of_people={"24"} />
        <Doing header={"Attacking"} number_of_people={"24"} />
        <Doing header={"Resting"} number_of_people={"24"} />
      </div>
      <div className="flex flex-row space-x-4 mt-4">
        <button className="bg-[#1C4169] text-[#58ABDA] flex-grow text-[18px] border border-[#2C5A80] px-4 py-3 rounded-lg">
          Hunt
        </button>
        <button className="bg-[#1C4169] text-[#58ABDA] flex-grow text-[18px] border border-[#2C5A80] px-4 py-3 rounded-lg">
          Hide!
        </button>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="flex flex-col min-w-[20vw] max-w-[20vw]  bg-[#02040Aaa] border-2 border-[#4FCDF2] py-4">
      <h2 className="mx-auto">Game History</h2>
      <div className="flex flex-row mt-2 space-x-2 mx-2 justify-center">
        <button className="bg-[#1C4169] text-[#58ABDA] flex-grow text-[9px] border border-[#2C5A80] px-4 py-1 rounded-lg">
          Hunts
        </button>
        <button className="bg-[#1C4169] text-[#58ABDA] flex-grow text-[9px] border border-[#2C5A80] px-4 py-1 rounded-lg">
          Hides
        </button>
        <button className="bg-[#1C4169] text-[#58ABDA] flex-grow text-[9px] border border-[#2C5A80] px-4 py-1 rounded-lg">
          Attacks!
        </button>
      </div>
    </div>
  );
}

export default function Game() {
  return (
    <Layout>
      <div className="flex flex-row justify-between w-[80vw] space-x-4">
        <Left />
        <Middle />
        <Right />
      </div>
    </Layout>
  );
}
