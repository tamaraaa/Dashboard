import React from "react";
import "./dashboard_cards_item.scss";


// ova komponenta je malo glupa
// bolje da si napravila komponenetu dashboardCard koja je zapravo wrapper oko nekog childa i renderuje ga
// taj child moze da bude biljka, temperatura ili sta vec, dashboardCard to ne zanima
// bukvalno samo da te neke stilove koji su potrebni i renderuje child, nista vise
// onda pozivas ovaj card tri puta i u svaki kao child stavis taj neki content koji ti treba
// na taj nacin mozes card kasnije i da reuzujes a ne da moras uvek u njega da dodajes nov props, recimo sad hoces macku da 
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
  console.log(data);
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
  console.log(moreDrinks, data.id);
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
export default dashboardCardsItem;
