import { useContext } from "react";
import "./styles.css";
import {
  UserContext,
  UserDispatchContext,
  UserActionTypes,
} from "../../UserContext.jsx";

export const Navbar = () => {
  const user = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);
  console.log("User Data:", User);

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
        {User.isLoggedInUser ? <li>Account</li> : <></>}
        {User.isLoggedInUser ? (
          <li onClick={handleSignOutClick}>Sign out</li>
        ) : (
          <li onClick={handleSignInClick}>Sign in</li>
        )}
      </ul>
    </nav>
  );
};
