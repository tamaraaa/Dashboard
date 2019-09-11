import React, { useContext, useState } from "react";
import uniqid from "uniqid";

import BarChart from "./BarChart/BarChart";
import DashboardCardsItem from "./DashbordCards/DashboardCardsItem";

import { DashboardContext } from "../../context/dashboardContext";
import water from "../../assets/images/water.svg";
import thermometer from "../../assets/images/thermometer.svg";
import sadPlant from "../../assets/images/sad_plant.png";
import happyPlant from "../../assets/images/happy_plant.png";

import "./dashboard.scss";

const Dashboard = () => {
  const [state] = useContext(DashboardContext);
  const [waterPlant, setWaterPlant] = useState(true);
  const [moreDrinks, setMoreDrinks] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const images = [thermometer, water, waterPlant ? sadPlant : happyPlant];
  const buttonText = [
    "+-",
    moreDrinks ? "Added!" : "Add more!",
    waterPlant ? "Water!" : "Waterd:)"
  ];
  return (
    <div className="dashboard">
      <div className="dashboard__cards">
        {state.officeInfo &&
          state.officeInfo.map((card, index) => {
            card.img = images[index];
            card.btnText = buttonText[index];
            return (
              <DashboardCardsItem
                temperature={temperature}
                setTemperature={setTemperature}
                btnText={buttonText[index]}
                data={card}
                moreDrinks={moreDrinks}
                setMoreDrinks={setMoreDrinks}
                id={index}
                setWaterPlant={setWaterPlant}
                key={uniqid()}
              />
            );
          })}
      </div>
      <div className="dashboard__chart">
        <BarChart companies={state.companies} />
      </div>
    </div>
  );
};

export default Dashboard;
