
import { useState, useContext, useEffect } from "react";
import './styles.css';
import { UserContext } from '../UserContext'; 

export const UserDetailsForm = ({ incomingUsername }) => {
  const [username, setUsername] = useState('');
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    setUsername(incomingUsername); 
  }, [incomingUsername]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: UserActionTypes.update, payload: username });  
  }

  return (
    <form className='user-details-form' onSubmit={handleSubmit}>
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
