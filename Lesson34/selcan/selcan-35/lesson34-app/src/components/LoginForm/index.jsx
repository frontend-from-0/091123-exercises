import React, { useState } from "react";
import { useUserDispatch, UserActionTypes } from "../../userContext";

const LoginForm = () => {
  const dispatch = useUserDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with username: ", username);

    if (username.trim() === "" || password.trim() === "") {
      setError("Username and password cannot be empty.");
      return;
    }

    dispatch({ type: UserActionTypes.login });
    setError("");
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
