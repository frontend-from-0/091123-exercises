import { createContext, useReducer, useState, useContext } from "react";

export const UserContext = createContext();
export const UserDispatchContext = createContext();

export const UserActionTypes = {
  login: "login",
  logout: "logout",
  update: "update",
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

export const UserProvider = ({ children, initialState }) => {
  const [user, setUser] = useState(initialState ?? { isLoggedInUser: false });
  const dispatch = useReducer(
    userReducer,
    initialState ?? { isLoggedInUser: false }
  )[1];

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

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

// Kullanıcı durumunu almak için bir hook
export const useUser = () => {
  return useContext(UserContext);
};

// Dispatch fonksiyonunu almak için bir hook
export const useUserDispatch = () => {
  return useContext(UserDispatchContext);
};

export default userReducer;
