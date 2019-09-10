import React from "react";
import PropTypes from "prop-types";
import "./dashboard_cards_item.scss";

const dashboardCardsItem = ({
  data,
  id,
  setWatherPlant,
  btnText,
  setMoreDrinks,
  moreDrinks,
  temperature,
  setTemperature
}) => {
  const button = id => {
    switch (id) {
      case 2:
        return <button onClick={() => setWatherPlant(false)}>{btnText}</button>;
      case 1:
        return <button onClick={() => setMoreDrinks(5)}>{btnText}</button>;
      case 0:
        return (
          <span className="dashboard__cards__item__btn">
            <button
              onClick={() => {
                setTemperature(temperature + 1);
              }}
            >
              {btnText[0]}
            </button>{" "}
            <button
              onClick={() => {
                setTemperature(temperature - 1);
              }}
            >
              {btnText[1]}
            </button>
          </span>
        );
      default:
        return null;
    }
  };
  const values = id => {
    switch (id) {
      case 0:
        return Object.values(data)[0] + temperature;
      case 1:
        return Object.values(data)[0] + moreDrinks;
      case 2:
        return Object.values(data)[0];
      default:
        return Object.values(data)[0];
    }
  };
  let image = data.img;
  return (
    <div className="dashboard__cards__item">
      <span>
        {Object.keys(data)[0]} : {values(id)}
      </span>{" "}
      <img src={image} alt="img" />
      {button(id)}
    </div>
  );
};
dashboardCardsItem.propTypes = {
  data: PropTypes.object,
  id: PropTypes.number,
  setWatherPlant: PropTypes.func,
  btnText: PropTypes.string,
  setMoreDrinks: PropTypes.func,
  moreDrinks: PropTypes.number,
  temperature: PropTypes.number,
  setTemperature: PropTypes.func
};

export default dashboardCardsItem;
