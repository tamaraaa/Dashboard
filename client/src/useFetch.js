import { useContext, useEffect } from "react";
import axios from "axios";
import { DashboardContext } from "./context/dashboardContext";
import {
  START_FETCH,
  FETCH_ERROR,
  FETCH_SUCCESS
} from "./context/dashboardReducer";

const useFetch = param => {
  const context = useContext(DashboardContext);
  const [, dispatch] = context;
  const url = "http://localhost:5000";
  useEffect(() => {
    dispatch({ type: START_FETCH });
    axios
      .get(url + param)
      .then(response => {
        dispatch({ type: FETCH_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_ERROR, payload: error });
      });
  }, [dispatch, param]);
};
export { useFetch };
