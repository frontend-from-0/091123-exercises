import React, { useState } from "react";
import { Account } from "../Account";

// TODO: Create a new Component that contains log in form, so that user can type username and password and click submit button to log in.
// If user is logged in, show Account component.
// If user is logged out, show Log In component.

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      setLoggedIn(true);
    } else {
      alert("wrong username or password!");
    }
  };

  return (
    <div>
      {loggedIn ? (
        <Account />
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}
