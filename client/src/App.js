import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";
import Dashboard from "./components/Dashboard/dashboard";
import { connect } from "react-redux";
import { fetchData } from "./js/actions";

function App({ response }) {
  console.log(response);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Sidebar data={response} />
        <Dashboard data={response} />
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    response: state.response
  };
};

export default connect(
  mapStateToProps,
  fetchData
)(App);
