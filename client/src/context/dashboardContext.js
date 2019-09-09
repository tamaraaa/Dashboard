import React, { createContext, useReducer } from "react";
import dashboardReducer from "./dashboardReducer";

const initialState = {
  startFetching: false,
  status: "",
  companies: null,
  dailyInfo: null,
  officeInfo: null,
  error: ""
};

const DashboardContext = createContext();

const DashboardProvider = props => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);
  return (
    <DashboardContext.Provider value={[state, dispatch]}>
      {props.children}
    </DashboardContext.Provider>
  );
};
export { DashboardContext, DashboardProvider };
