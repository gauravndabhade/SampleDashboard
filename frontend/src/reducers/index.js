import {
  SET_GRAPH_DETAILS,
  FETCH_GRAPH_DETAILS
} from "../actions/types";

export default function (state = {}, action) {
  console.log("action type => ", action.type);
  switch (action.type) {
    case SET_GRAPH_DETAILS:
      return { data: action.payload };

    default:
      return {
        ...state,
        isLoadingData: false
      };
  }
}
