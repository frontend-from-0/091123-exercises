
import { useState } from "react"
import './styles.css';

export const UserDetailsForm = ({incomingUsername}) => {
  const [username, setUsername] = useState(incomingUsername);

  function handleSubmit (e) {
    e.preventDefault();
    console.log('New user name is: ', username);
  };

  return (
    <form className='user-details-form' onSubmit={handleSubmit}>
      <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username} />
      <button type="submit">Save</button>
    </form>
  )
}


import { useState, useContext } from "react";
import "./styles.css";
import { UserDispatchContext, UserActionTypes } from "../../userContext";

export const UserDetailsForm = () => {
  const [username, setUsername] = useState("");
  const dispatch = useContext(UserDispatchContext);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: UserActionTypes.update,
      payload: {
        username: username,
      },
    });
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

