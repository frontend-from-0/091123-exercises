import { createContext, useReducer, useState } from "react";

export const UserContext = createContext();
export const UserDispatchContext = createContext();

export const UserActionTypes = {
  login: "login",
  logout: "logout",
  update: "update",
};

export const UserProvider = ({ children, initialState }) => {
  const [user, setUser] = useState(initialState ?? { isLoggedInUser: false });
  const [state, dispatch] = useReducer(
    userReducer,
    initialState ?? { isLoggedInUser: false }
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

function userReducer(state, action) {
  switch (action.type) {
    case UserActionTypes.login:
      return { ...state, isLoggedInUser: true };
    case UserActionTypes.logout:
      return { ...state, isLoggedInUser: false };
    case UserActionTypes.update:
      return { ...state, ...action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default userReducer;
