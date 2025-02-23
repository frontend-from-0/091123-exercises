import './styles.css';
import { useContext } from 'react';
import { UserContext, UserDispatchContext,UserActionTypes } from '../../UserContext';

export const Navbar = () => {
  const user = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);
  // const setUser = useContext(UserDispatchContext);

  function handleSignOutClick() {
    dispatch({ type: UserActionTypes.logout });
    // setUser({isLoggedInUser: false});
  }

  // function handleSignInClick() {
  //   dispatch({
  //     type: UserActionTypes.login,
  //     payload: { isLoggedInUser: true, username: "johndoe01" }
  //   });
    // setUser({isLoggedInUser: true, username: "johndoe01"});
  // }

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li>Home</li>
        {user.isLoggedInUser ? <li>Account</li> : <></>}
        {user.isLoggedInUser ? <li onClick={handleSignOutClick}>Sign out</li> : <li>Sign in</li>}

      </ul>
    </nav>
  )
}