import React from "react";
import Chart from "./Chart/chart";
import DailyInfo from "./DailyInfo/dailyInfo";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <DailyInfo />
      <Chart />
    </div>
  );
};
export default Sidebar;
