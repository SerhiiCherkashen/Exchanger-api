import React from "react";
import "./Body.css";
import { arrayCurrency } from "./stateBody";
import revers from "../image/revers.png";
import HeaderBody from "./BodyComponents/HeaderBody";
import ChangeAreaBody from "./BodyComponents/ChangeAreaBody";
import CourseBody from "./BodyComponents/CourseBody";

const Body = () => {
  return (
    <div className="body">
      <div className="content">
        <HeaderBody />
        <ChangeAreaBody />
        <CourseBody />
      </div>
    </div>
  );
};

export default Body;
