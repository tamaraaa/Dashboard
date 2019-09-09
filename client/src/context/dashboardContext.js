import React, { createContext, useReducer } from "react";
import dashboardReducer from "./dashboardReducer";

const initialState = {
  startFetching: false,
  status: "",
  // initial state treba da bude prazan niz za companies, pogotovo ako iteriras po njemu u aplikaciji
  // brobaj ovo u conzoli
  // const asd = null;
  // asd.lenght
  // asd.map(a => console.log(a))
  companies: null,
  
  // proveri i za ostale elemente, recimo ako imas negde officeInfo.nesto ce pucati ako je officeInfo: null
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
