import React, { useContext, useEffect, useState } from "react";
import DashboardCardsItem from "./DashbordCards/dashboardCardsItem";
import { DashboardContext } from "../../context/dashboardContext";
import { useFetch } from "../../useFetch";
import BarChart from "./barChart/BarChart";
import uniqid from "uniqid";
import water from "../../assets/images/water.svg";
import thermometer from "../../assets/images/thermometer.svg";
import sadPlant from "../../assets/images/sad_plant.png";
import happyPlant from "../../assets/images/happy_plant.png";
import "./dashboard.scss";

const Dashboard = () => {
  useFetch();

  const context = useContext(DashboardContext);
  const [state] = context;
  const [watherPlant, setWatherPlant] = useState(true);
  const [moreDrinks, setMoreDrinks] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const images = [thermometer, water, watherPlant ? sadPlant : happyPlant];
  const buttonText = [
    "+-",
    moreDrinks ? "Added!" : "Add more!",
    watherPlant ? "Wather!" : "Wathered:)"
  ];
  useEffect(() => {}, []);
  return (
    <div className="dashboard">
      <div className="dashboard_cards">
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
                setWatherPlant={setWatherPlant}
                key={uniqid()}
              />
            );
          })}
      </div>
      <div className="dashboard_graf">
        <BarChart companies={state.companies} />
      </div>
    </div>
  );
};

export default Dashboard;
