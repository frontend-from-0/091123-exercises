import { useState } from "react";
import "./styles.css";

// todo : update component so that it's possible to change username and save new username in the userContext
export const UserDetailsForm = () => {
  const [username, setUsername] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("New user name is: ", username);
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
