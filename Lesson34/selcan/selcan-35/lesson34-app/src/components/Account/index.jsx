import React, { useContext } from "react";
import { UserContext } from "../../userContext";

const Account = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user.isLoggedInUser ? (
        <p>Welcome!</p>
      ) : (
        <p>Please log in to see your account information.</p>
      )}
    </div>
  );
};

export default Account;
