import React, { useContext } from "react";
import { UserContext } from "../../userContext";
import { UserDetailsForm } from "../UserDetailsForm";
import { useUser } from "../../userContext";
import LoginForm from "../LoginForm";

const Account = () => {
  const user = useUser();

  return (
    <div>
      <LoginForm />
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
