import React, { useContext } from "react";
import { DashboardContext } from "../../../context/dashboardContext";
import { getIcon } from "../../../utils";
import "./daily_info.scss";

const DailyInfo = () => {
  const context = useContext(DashboardContext);
  const [state] = context;
  let { dailyInfo } = state;
  
  return (
    <div className="sidebar__info">
      <div className="sidebar__info__item">
        <p>8 September</p>
        <p>{dailyInfo && dailyInfo.time}</p>
        <div className="sidebar__info__item">
          <span className="sidebar__info__item__icon">
            <img src={dailyInfo && getIcon(dailyInfo.weather)} alt="icon"/>
          </span>
          {dailyInfo && dailyInfo.weather}&#x2103;
        </div>
      </div>
    </div>
  );
};
export default DailyInfo;
