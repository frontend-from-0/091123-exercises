import React, { createContext, useReducer, useContext } from "react";

export const UserContext = createContext();
export const UserDispatchContext = createContext();

export const UserActionTypes = {
  login: "login",
  logout: "logout",
  update: "update",
};

const initialState = {
  isLoggedInUser: false,
  username: "",
  password: "",
};

function userReducer(state, action) {
  switch (action.type) {
    case UserActionTypes.login:
      return { ...state, isLoggedInUser: true };
    case UserActionTypes.logout:
      return { ...state, isLoggedInUser: false, username: "", password: "" };
    case UserActionTypes.update:
      return { ...state, ...action.payload, username: "", password: "" };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export const useUserDispatch = () => {
  return useContext(UserDispatchContext);
};

export default userReducer;
