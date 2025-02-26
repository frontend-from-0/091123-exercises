import React, { useContext } from "react";
import "./styles.css";
import {
  useUser,
  UserDispatchContext,
  UserActionTypes,
} from "../../userContext";

const Navbar = () => {
  const user = useUser();
  const dispatch = useContext(UserDispatchContext);

  const handleSignInClick = () => {
    dispatch({
      type: UserActionTypes.login,
    });
  };

  const handleSignOutClick = () => {
    console.log("Sign Out clicked");
    dispatch({
      type: UserActionTypes.logout,
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
