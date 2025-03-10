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
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
      loginForm.scrollIntoView({ behavior: "smooth", block: "start" });
      loginForm.classList.add("highlight-form");
      setTimeout(() => {
        loginForm.classList.remove("highlight-form");
      }, 1500);
    } else {
      console.log("Login form bulunamadı!");
    }
  };

  const handleSignOutClick = () => {
    console.log("Sign Out clicked");
    dispatch({
      type: UserActionTypes.logout,
    });
  };

  console.log("User state:", user);

  return (
    <>
      <div className="navbar-container">
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
      </div>
    </>
  );
};

export default Navbar;
