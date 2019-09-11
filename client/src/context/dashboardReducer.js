const START_FETCH = "START_FETCH";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";

const dashboardReducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case START_FETCH:
      return {
        ...state,
        loading: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: payload.currentVisitors,
        dailyInfo: payload.info,
        officeInfo: payload.officeData
      };
    case FETCH_ERROR: {
      return {
        ...state,
        error: "error"
      };
    }
    default:
      return state;
  }
};
export default dashboardReducer;
export { START_FETCH, FETCH_ERROR, FETCH_SUCCESS };
