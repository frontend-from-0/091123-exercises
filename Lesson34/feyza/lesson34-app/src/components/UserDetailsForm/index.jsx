import { useState } from "react";
import { useState, useContext, useEffect } from "react";
import "./styles.css";
import { UserContext } from "../../userContext";

export const UserDetailsForm = () => {
  const dispatch = useContext(UserContext);

  const [username, setUsername] = useState(incomingUsername);

  useEffect(() => {
    setUsername(incomingUsername);
  }, [incomingUsername]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("New user name is: ", username);
    dispatch({ type: "SET_USERNAME", payload: username });
  }

  return (
    <form className="user-details-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <button type="submit">Save</button>
    </form>
  );
};
