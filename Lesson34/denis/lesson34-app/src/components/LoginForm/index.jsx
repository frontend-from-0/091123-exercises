import React, { useState, useContext } from "react";
import { UserDispatchContext, UserActionTypes } from "../../UserContext";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useContext(UserDispatchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch({
        type: UserActionTypes.Login,
        payload: {
          isLoggedInUser: true,
          username: username,
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};
