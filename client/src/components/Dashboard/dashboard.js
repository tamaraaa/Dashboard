import React, { useState, useEffect } from "react";
import "./dashboard.scss";
import DashboardCardsItem from "./DashbordCards/dashboardCardsItem";

const Dashboard = ({ data }) => {
  return (
    <div className="dashboard">
      <div className="dashboard_cards">
        {/* {data
          ? data.cardsData.map(card => {
              return (
                <DashboardCardsItem key={card.id} data={Object.values(card)} />
              );
            })
          : ``} */}
      </div>
      <div className="dashboard_graf"></div>
    </div>
  );
};
export default Dashboard;
