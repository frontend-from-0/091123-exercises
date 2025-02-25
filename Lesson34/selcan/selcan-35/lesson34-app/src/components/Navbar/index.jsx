import React, { useContext } from "react";
import "./styles.css";
import {
  UserContext,
  UserDispatchContext,
  UserActionTypes,
} from "../../userContext";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);

  const handleSignInClick = () => {
    dispatch({
      type: UserActionTypes.login,
      payload: { isLoggedInUser: true },
    });
  };

  const handleSignOutClick = () => {
    console.log("Sign Out clicked");
    dispatch({
      type: UserActionTypes.logout,
      payload: { isLoggedInUser: false },
    });
  };

  console.log("User state:", user);

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li>Home</li>
        {user.isLoggedInUser ? (
          <>
            <li>Account</li>
            <li onClick={handleSignOutClick}>Sign Out</li>
          </>
        ) : (
          <li onClick={handleSignInClick}>Sign In</li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
