import { useContext } from "react";
import "./styles.css";
import { UserContext } from "../../App.js";

export const Navbar = () => {
  const User = useContext(UserContext);
  console.log("User Data:", User);
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li>Home</li>
        {User.isLoggedInUser ? <li>Account</li> : <></>}
        {User.isLoggedInUser ? (
          <li>Sign out</li>
        ) : (
          <>
            <li>Sign in</li>
          </>
        )}
      </ul>
    </nav>
  );
};
