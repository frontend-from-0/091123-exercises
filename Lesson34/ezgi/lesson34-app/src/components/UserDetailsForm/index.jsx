import './styles.css';
import { useState, useContext } from "react"
import { UserDispatchContext, UserActionTypes } from "../../UserContext";
// import {username  as usernameLogin} from '../LoginForm' 

export const UserDetailsForm = () => {
  const [username, setUsername] = useState('');
  const dispatch = useContext(UserDispatchContext);

  function handleSubmit(e) {
    e.preventDefault();
    if(username){
      dispatch ({
        type : UserActionTypes.update,
        payload : {
          isLoggedInUser: true,
          username: {username}}
      })
    }
  };

  return (
    <form className='user-details-form' onSubmit={handleSubmit}>
      {/* <p>Hello + {usernameLogin}</p> 
I wanted to show the username that was login. And also I tried to call as prop in another name. How can call it from loginForm and use it in return statement?  */}

        <label id='username'>
        Change Your Username :
        <input
          type='text'
          name='username'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </label>

      <button type='submit'>Save</button>
    </form>
  )
}