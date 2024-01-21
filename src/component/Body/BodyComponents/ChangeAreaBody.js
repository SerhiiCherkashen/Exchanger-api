import React, { useEffect, useState } from "react";
import { arrayCurrency } from "../stateBody";
import revers from "../../image/revers.png";
import "./ChangeAreaBody.css";
import axios from "axios";
import { url } from "./stateChangeAreaBody";

const ChangeAreaBody = () => {
  async function clickUrl() {
    let result = await axios.get(url);
    return result;
  }
  const [side, setSide] = useState(true);
  const [leftCurrency, setLeftCurrency] = useState("UAH");
  const [rightCurrency, setRightCurrency] = useState("USD");
  const [leftValue, setLeftValue] = useState(100);
  const [rightValue, setRightValue] = useState(101);

  async function courseCurrency(currency) {
    let arrayResults = await clickUrl();
    // console.log("Result data[index] : ", arrayResults.data);
    let index = arrayResults.data.findIndex((element) => {
      return element.cc == currency;
    });
    let fixed = arrayResults.data[index].rate;
    return fixed;
  }

  async function findRate() {
    let leftCours;
    let rightCours;
    if (leftCurrency !== "UAH") {
      leftCours = await courseCurrency(leftCurrency);
    } else {
      leftCours = 1;
    }
    if (rightCurrency !== "UAH") {
      rightCours = await courseCurrency(rightCurrency);
    } else {
      rightCours = 1;
    }

    if (side === true) {
      let leftGrivnaRight = ((leftValue * leftCours) / rightCours).toFixed(2);
      setRightValue(leftGrivnaRight);
    } else if (side === false) {
      let leftGrivnaRight = ((rightValue * rightCours) / leftCours).toFixed(2);
      setLeftValue(leftGrivnaRight);
    }
  }
  const changeCurrency = (e, side) => {
    if (side === "left") {
      setLeftCurrency(e.target.value);
    } else if (side === "right") {
      setRightCurrency(e.target.value);
    }
  };
  const changeInput = (e, side) => {
    if (side === "left") {
      setLeftValue(e.target.value);
      setSide(true);
    } else {
      setRightValue(e.target.value);
      setSide(false);
    }
  };
  const changePlace = () => {
    let reserveLeftValue = leftValue;
    let reserveLeftCurrency = leftCurrency;
    setLeftValue(rightValue);
    setLeftCurrency(rightCurrency);
    setRightCurrency(reserveLeftCurrency);
    setRightValue(reserveLeftValue);
  };

  useEffect(() => {
    findRate();
  });

  return (
    <div className="change-area">
      <div>
        <h3>Отдаю</h3>
        <input
          value={leftValue}
          onClick={() => {
            setSide(true);
          }}
          onChange={(e) => changeInput(e, "left")}
        />
        <select onChange={(e) => changeCurrency(e, "left")}>
          {arrayCurrency.map((element, index) => {
            if (element === leftCurrency) {
              return (
                <option selected label={leftCurrency} key={index + Date.now()}>
                  {element}
                </option>
              );
            } else {
              return <option key={index + Date.now()}>{element}</option>;
            }
          })}
        </select>
      </div>
      <div>
        <button>
          <img src={revers} onClick={changePlace} />
        </button>
      </div>
      <div>
        <h3>Получаю</h3>
        <input
          value={rightValue}
          onClick={() => {
            setSide(false);
          }}
          onChange={(e) => changeInput(e, "right")}
        />
        <select onChange={(e) => changeCurrency(e, "right")}>
          {arrayCurrency.map((element, index) => {
            if (element === rightCurrency) {
              return (
                <option selected label={rightCurrency} key={index + Date.now()}>
                  {element}
                </option>
              );
            } else {
              return <option key={index + Date.now()}>{element}</option>;
            }
          })}
        </select>
      </div>
    </div>
  );
};

export default ChangeAreaBody;
