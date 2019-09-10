import React from "react";
import Chart from "./Chart/chart";
import DailyInfo from "./DailyInfo/dailyInfo";
import PropTypes from "prop-types";
import "./sidebar.scss";

const Sidebar = ({ toogleSidebar }) => {
  const showSidebar = toogleSidebar ? "sidebar__mobile" : "";
  return (
    <div className={`sidebar ${showSidebar}`}>
      <DailyInfo />
      <Chart />
    </div>
  );
};
Sidebar.propTypes = {
  toogleSidebar: PropTypes.bool
};
export default Sidebar;
