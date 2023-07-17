import Button from "@/styles/button";
import CardBgStyled from "@/styles/card-bg.styled";
import React from "react";
import InfoTooltip from "../info-tooltip";
import { AttackInputStyled } from "./style";

const AttackInput = () => {
  return (
    <div className="mt-[10px] relative h-[63px] flex items-center py-3 px-[15px]">
      <div className="cardBgStyledEmpty" />
      <input
        className="attack-input"
        placeholder="To Attack Select a Champion / Enter Token ID / Name"
      />
      <button className="button-hunter !h-[41px] !w-[153px]">
        <InfoTooltip content="attack" position={{ x: "right", y: "top" }} />
        Attack!
      </button>
    </div>
  );
};

export default AttackInput;
