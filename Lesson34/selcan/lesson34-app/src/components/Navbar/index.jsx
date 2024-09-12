
import { useContext } from "react";
import "./styles.css";
import {
  UserContext,
  UserDispatchContext,
  UserActionTypes,
} from "../..//userContext.jsx";

export const Navbar = () => {
  const user = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);

  function handleSignOutClick() {
    dispatch({ type: UserActionTypes.logout });
  }

  function handleSignInClick() {
    dispatch({
      type: UserActionTypes.login,
      payload: {
        isLoggedInUser: true,
        username: "johndeck",
      },
    });
  }
=======
import './styles.css';

export const Navbar = () => {


  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li>Home</li>

        {user.isLoggedInUser ? <li>Account</li> : <></>}
        {user.isLoggedInUser ? (
          <li onClick={handleSignOutClick}>Sign out</li>
        ) : (
          <li oncick={handleSignInClick}>Sign in</li>
        )}
      </ul>
    </nav>
  );
};
=======
        <li>Account</li>
        <li>Sign in</li>
        <li>Sign up</li>
      </ul>
    </nav>
  )
}

