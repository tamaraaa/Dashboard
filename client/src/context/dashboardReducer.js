const START_FETCH = "START_FETCH";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";

const dashboardReducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case START_FETCH:
      return {
        ...state,
        status: "pending"
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        status: "success",
        // rekao bih da ti imenovanje bas i ne ide najbolje :D
        // companies -> currentNomOfVisitors, nesto nisi lepo imenovala od ova dva
        // takodje, typo current, ne curent
        companies: payload.data.curentNumOfVisitors,
        dailyInfo: payload.data.info,
        officeInfo: payload.data.officeData
      };
    case FETCH_ERROR: {
      return {
        ...state,
        error: payload.error
      };
    }
    default:
      return state;
  }
};
export default dashboardReducer;
export { START_FETCH, FETCH_ERROR, FETCH_SUCCESS };
