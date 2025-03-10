import React, { useState } from "react";
import { useUserDispatch, UserActionTypes } from "../../userContext";
import "./styles.css";

export const UserDetailsForm = () => {
  const dispatch = useUserDispatch();
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New user name is: ", username);

    if (username.trim() === "") {
      setError("Username cannot be empty.");
      return;
    }

    if (username.length < 3) {
      setError("Username must be at least 3 characters long.");
      return;
    }

    dispatch({
      type: UserActionTypes.update,
      payload: { username: username },
    });
    setError("");
  };

  return (
    <form className="user-details-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default UserDetailsForm;
