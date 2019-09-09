import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";
import Dashboard from "./components/Dashboard/dashboard";
import { DashboardProvider } from "./context/dashboardContext";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <DashboardProvider>
          <Sidebar />
          <Dashboard />
        </DashboardProvider>
      </div>
    </div>
  );
}

export default App;
