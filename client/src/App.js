import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";
import Dashboard from "./components/Dashboard/dashboard";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import { DashboardProvider } from "./context/dashboardContext";

function App() {
  const [toogleSidebar, setToogleSidebar] = useState(false);
  return (
    <div className="App">
      <Header />
      <button
        className="toogle_btn"
        onClick={() => {
          setToogleSidebar(!toogleSidebar);
        }}
      >
        {toogleSidebar ? (
          <FaAngleLeft color="dd3d4a" size={40} />
        ) : (
          <FaAngleRight color="dd3d4a" size={40} />
        )}
      </button>
      <div className="wrapper">
        <DashboardProvider>
          <Sidebar toogleSidebar={toogleSidebar} />
          <Dashboard />
        </DashboardProvider>
      </div>
    </div>
  );
}

export default App;
