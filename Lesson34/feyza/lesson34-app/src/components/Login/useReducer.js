import { UserActionTypes } from "../../userContext";

export const userReducer = (state, action) => {
  switch (action.type) {
    case UserActionTypes.login:
      return {
        ...state,
        username: action.payload.username,
        isLoggedInUser: true,
      };
    default:
      return state;
  }
};
