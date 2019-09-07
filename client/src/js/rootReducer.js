import { START_FETCH, SUCCESS, ERROR } from "./constants";

const initialState = {
  startFetching: false,
  status: "",
  response: null,
  error: ""
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCH:
      return {
        ...state,
        status: "pending"
      };
    case SUCCESS:
      return {
        ...state,
        status: "success",
        response: action.payload.data
      };
    case ERROR: {
      return {
        ...state,
        error: action.payload.error
      };
    }
    default:
      return state;
  }
}
export default rootReducer;
