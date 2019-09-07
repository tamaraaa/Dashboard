import { ERROR, START_FETCH, SUCCESS } from "./constants";
import axios from "axios";

export const fetchData = () => {
  return dispatch => {
    dispatch({ type: START_FETCH });
    return axios
      .get("http://localhost:5000/dashboardInfo")
      .then(response => {
        console.log(response);
        dispatch({ type: SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR });
        console.log(error);
      });
  };
};
