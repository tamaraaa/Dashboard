import React from "react";
import Chart from "./Chart/chart";
import DailyInfo from "./DailyInfo/dailyInfo";
import "./sidebar.scss";

const Sidebar = ({ toogleSidebar }) => {
  const showSidebar = toogleSidebar ? "sidebar__mobile" : "";
  console.log(toogleSidebar);
  return (
    <div className={`sidebar ${showSidebar}`}>
      <DailyInfo />
      <Chart />
    </div>
  );
};
export default Sidebar;
