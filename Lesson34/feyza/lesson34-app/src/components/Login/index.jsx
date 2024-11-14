import { useContext, useState } from "react";
import { UserDispatchContext, UserActionTypes } from "../../userContext";

export const LogIn = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(UserDispatchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: UserActionTypes.login,
      payload: { username, isLoggedInUser: true },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User Name:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <button type="submit">Log In</button>
    </form>
  );
};
