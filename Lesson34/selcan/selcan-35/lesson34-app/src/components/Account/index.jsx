import React, { useContext } from "react";
import { UserContext } from "../../userContext";
import { UserDetailsForm } from "../UserDetailsForm";
import { useUser } from "../../userContext";

const Account = () => {
  const user = useUser();

  return (
    <div>
      <UserDetailsForm />
      {user.isLoggedInUser ? (
        <p>Welcome!</p>
      ) : (
        <p>Please log in to see your account information.</p>
      )}
    </div>
  );
};

export default Account;
