import React, { useContext, useState } from "react";
import { UserDispatchContext, UserActionTypes } from "../../userContext";

export default function Login() {
  const dispatch = useContext(UserDispatchContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: UserActionTypes.login,
      payload: {
        isLoggedInUser: true,
        username: "user",
      },
    });

    if (username === "user" && password === "password") {
      setError("");
    } else {
      setError("wrong username or password!");
    }
  };

  return (
    <div>
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

      {error ? <p>{error}</p> : <></>}
    </div>
  );
}
