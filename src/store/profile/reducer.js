import { UPDATE_PROFILE, TOGGLE_VISIBLE_PROFILE } from "./types";

const initialState = {
  isVisibleProfile: true,
  firstName: "firstName",
  lastName: "lastName",
  name: "name",
  number: "number"
};


export const profileReducer = (state = initialState, action) => {
  /*switch (action.type) {
    case UPDATE_PROFILE:
      return { ...state, profile: action.payload};
      default:
        return state;
  };*/


  switch (action.type) {
    case TOGGLE_VISIBLE_PROFILE:
      return { ...state, isVisibleProfile: !state.isVisibleProfile };
    default:
      return state;
  }
};
