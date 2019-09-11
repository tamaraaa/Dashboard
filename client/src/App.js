import React, { useState, useContext } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

import { useFetch } from "./useFetch";
import { DashboardContext } from "./context/dashboardContext";

import "./App.scss";

function App() {
  const [toogleSidebar, setToogleSidebar] = useState(false);
  const arrowColor = "#dd3d4a";
  const [state] = useContext(DashboardContext);
  const { loading } = state;
  useFetch("/dashboardInfo");

  return (
    <div className="App">
      {loading ? (
        <div className="App__loader"></div>
      ) : (
        <React.Fragment>
          <Header />
          <button
            className="App__toogle_btn"
            onClick={() => {
              setToogleSidebar(!toogleSidebar);
            }}
          >
            {toogleSidebar ? (
              <FaAngleLeft color={arrowColor} size={40} />
            ) : (
              <FaAngleRight color={arrowColor} size={40} />
            )}
          </button>
          <div className="App__wrapper">
            <Sidebar toogleSidebar={toogleSidebar} />
            <Dashboard />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
