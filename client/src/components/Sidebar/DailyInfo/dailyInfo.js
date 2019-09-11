import React, { useContext } from "react";

import { DashboardContext } from "../../../context/dashboardContext";
import { getIcon } from "../../../utils";

import "./daily_info.scss";

const DailyInfo = () => {
  const [state] = useContext(DashboardContext);
  let { dailyInfo } = state;

  if (!dailyInfo) return null;

  const { time, weather } = dailyInfo;
  return (
    <div className="sidebar__info">
      <div className="sidebar__info__item">
        <p>8 September</p>
        <p>{time}</p>
        <div className="sidebar__info__item">
          <span className="sidebar__info__item__icon">
            <img src={getIcon(weather)} alt="icon" />
          </span>
          {weather}&#x2103;
        </div>
      </div>
    </div>
  );
};
export default DailyInfo;
