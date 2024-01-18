import React from "react";
import "./Header.css";
import kit from "../image/kit2.png";

const Header = () => {
  const arrayCity = ["Kyiv", "Kharkiv", "Odessa", "Dnipro", "Lviv"];
  return (
    <div className="header">
      <div className="content">
        <div className="left">
          <div>
            <img src={kit} />
          </div>

          <div>
            <select>
              {arrayCity.map((element, index) => {
                return <option key={index + Date.now()}>{element}</option>;
              })}
            </select>
            <h1> Показати номер</h1>
          </div>
        </div>
        <div className="right">
          <div>
            <span>Вход</span>
            <span>Регистрация</span>
            <span>UA</span>
            <span>US</span>
          </div>
          <div className="down">
            <span>Курси</span>
            <span>Следить</span>
            <span>Наши условия</span>
            <span>Контакты</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
