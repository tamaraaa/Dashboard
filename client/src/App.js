import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";
import Dashboard from "./components/Dashboard/dashboard";
import { DashboardProvider } from "./context/dashboardContext";

function App() {
  const [toogleSidebar, setToogleSidebar] = useState(false);
  return (
    <div className="App">
      <Header />
      <button
        className="toogle_btn"
        onClick={() => {
          console.log("blaa");
          setToogleSidebar(!toogleSidebar);
        }}
      >
        See daily info
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
