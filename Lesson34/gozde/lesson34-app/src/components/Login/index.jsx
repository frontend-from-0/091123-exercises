import { useContext, useState } from "react";
import { UserDispatchContext, UserActionTypes } from "../../UserContext";

export const LogIn = () => {
  const [username, setUsername] = useState("");
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
      <button type="submit">Log In</button>
    </form>
  );
};
