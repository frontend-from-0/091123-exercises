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
<<<<<<< HEAD
    <div className="login-form " role="form">
      <h1 id="login-title">Login</h1>
      <form onSubmit={handleSubmit} aria-labelledby="login-title">
        <div className="form-group">
=======
    <div className="login-form" role="form">
      <h1 id="login-title">Login</h1>
      <form onSubmit={handleSubmit} aria-labelledby="login-title">
        <div>
>>>>>>> 847752d30562429957bb6df83aa84fef8ce946b8
          <label htmlFor="username">
            Username:
            <span aria-hidden="true" style={{ color: "red" }}>
              {" "}
              *
            </span>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            aria-required="true"
            aria-invalid={error && username.trim() === ""}
            aria-describedby={error ? "error-message" : undefined}
          />
        </div>
<<<<<<< HEAD
        <div className="form-group">
=======
        <div>
>>>>>>> 847752d30562429957bb6df83aa84fef8ce946b8
          <label htmlFor="password">
            Password:
            <span aria-hidden="true" style={{ color: "red" }}>
              {" "}
              *
            </span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-required="true"
            aria-invalid={error && password.trim() === ""}
            aria-describedby={error ? "error-message" : undefined}
          />
        </div>
        {error && (
<<<<<<< HEAD
          <p id="error-message" role="alert" className="error-message">
=======
          <p id="error-message" role="alert" style={{ color: "red" }}>
>>>>>>> 847752d30562429957bb6df83aa84fef8ce946b8
            {error}
          </p>
        )}
        <button type="submit" aria-label="Login to your account">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
