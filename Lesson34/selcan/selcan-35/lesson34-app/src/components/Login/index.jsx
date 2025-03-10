import React, { useState } from "react";
import { Account } from "../Account";

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
