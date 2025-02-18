import { createContext, useReducer } from "react";

export const UserContext = createContext();
export const UserDispatchContext = createContext();

export const UserActionTypes = {
  login: "Login",
  logout: "logout",
  update: "update",
};

export const UserProvider = ({ children, initialState }) => {
  const [user, dispatch] = useReducer(userReducer, initialState ?? {});

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );

  // {
  //   type: 'Login',
  //   payload: {
  //     isLoggedInUser: true,
  //     username: "johndoe01",
  //   }
  // }

  function userReducer(state, action) {
    switch (action.type) {
      case UserActionTypes.login:
        console.log("Logging in, action:", action);
        return action.payload;
      case UserActionTypes.logout:
        console.log("Logging out, action:", action);
        return { isLoggedInUser: false };
      case UserActionTypes.update:
        return { ...state, ...action.payload };
      default:
        throw Error(`Action type ${action.type} is not supported`);
    }
  }
};
