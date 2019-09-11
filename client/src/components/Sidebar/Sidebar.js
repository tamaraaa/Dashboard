import React from "react";
import PropTypes from "prop-types";

import Chart from "./Chart/chart";
import DailyInfo from "./DailyInfo/DailyInfo";

import "./sidebar.scss";

const Sidebar = ({ toogleSidebar }) => (
  <div className={`sidebar ${toogleSidebar ? "sidebar__mobile" : ""}`}>
    <DailyInfo />
    <Chart />
  </div>
);
Sidebar.propTypes = {
  toogleSidebar: PropTypes.bool
};
export default Sidebar;
