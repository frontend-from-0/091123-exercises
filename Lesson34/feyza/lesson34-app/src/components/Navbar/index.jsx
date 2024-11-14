import { useContext } from "react";
import "./styles.css";
import {
  UserActionTypes,
  UserContext,
  UserDispatchContext,
} from "../../userContext.jsx";

export const Navbar = () => {
  const user = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);

  function handleSignOutClick() {
    dispatch({ type: UserActionTypes.logout });
  }

  function handleSignInClick() {
    dispatch({
      type: UserActionTypes.login,
      payload: { isLoggedInUser: true, username: "johndoe01" },
    });
  }

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li>Home</li>
        <li>Account</li>
        <li>Sign in</li>
        <li>Sign up</li>
      </ul>
    </nav>
  );
};
