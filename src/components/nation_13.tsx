import React from "react";
import { spain } from "../constants/constants";
import { changeFilterNations } from "../slices/filterSlice";

const Nation13 = (props: {
  changeFilter: (
    arg1: React.MouseEvent<HTMLDivElement>,
    arg2: Function,
  ) => void;
}) => {
  const filterVehicleByNation = (event: React.MouseEvent<HTMLDivElement>) => {
    props.changeFilter(event, changeFilterNations);
  };
  return (
    <div className={"filterColumn"}>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={filterVehicleByNation}
          title={"spain"}
        ></div>
        <div className={"filterOption"}>
          <img
            className={"filterFlag"}
            src={spain}
            alt="spain"
            title={"Испания"}
          />
        </div>
      </div>
    </div>
  );
};

export default Nation13;
