import React, { useEffect, useState } from "react";
import "./CourseBody.css";
import axios from "axios";
import { url } from "./stateChangeAreaBody";

const CourseBody = () => {
  const [st, seSt] = useState(true);
  const [arr, setArr] = useState([]);
  const arrayCourses = [
    { currency: "USD", a: "UAH/USD", cours: 1 },
    { currency: "EUR", a: "UAH/EUR", cours: 1 },
    { currency: "CZK", a: "UAH/CZK", cours: 1 },
  ];
  async function clickUrl() {
    let result = await axios.get(url);
    return result;
  }
  async function courseCurrency(currency) {
    let arrayResults = await clickUrl();
    let index = arrayResults.data.findIndex((element) => {
      return element.cc == currency;
    });
    let fixed = arrayResults.data[index].rate;
    return fixed;
  }
  async function mapping() {
    if (st) {
      let arr123 = [];
      let n1 = await courseCurrency(arrayCourses[0].currency);
      let n2 = await courseCurrency(arrayCourses[1].currency);
      let n3 = await courseCurrency(arrayCourses[2].currency);
      arr123.push(n1.toFixed(2));
      arr123.push(n2.toFixed(2));
      arr123.push(n3.toFixed(2));
      setArr(arr123);
      seSt(false);
    }
  }
  mapping();

  return (
    <div className="wrap-course">
      {arrayCourses.map((element, index) => {
        return (
          <div key={index + Date.now()} className="course">
            <h1>Курс {element.a}</h1>
            <span> {arr[index]}</span>
            <button>Обменять</button>
          </div>
        );
      })}
    </div>
  );
};

export default CourseBody;
