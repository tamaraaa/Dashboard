import { useContext, useEffect } from "react";
import { DashboardContext } from "./context/dashboardContext";
import {
  START_FETCH,
  FETCH_ERROR,
  FETCH_SUCCESS
} from "./context/dashboardReducer";

import axios from "axios";

const useFetch = () => {
  const context = useContext(DashboardContext);
  const [, dispatch] = context;

  useEffect(() => {
    dispatch({ type: START_FETCH });
    axios
      .get("http://localhost:5000/dashboardInfo")
      .then(response => {
        dispatch({ type: FETCH_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_ERROR, payload: error });
      });
  }, [dispatch]);
};
export { useFetch };
