import { useContext,useState } from 'react';
import { UserDispatchContext,UserActionTypes } from '../../UserContext';

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useContext(UserDispatchContext);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (username && password) {
        dispatch({
          type: UserActionTypes.login,
          payload: {
            isLoggedInUser: true,
            username: username,
          },
        });
      }
    };
  
  return (
    <>
        <form onSubmit={handleSubmit}>
          <h2>Login Form:</h2>
          <label> Username :
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </label>
      <label> Password :
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </label>
      <button type="submit">Login</button>
    </form>
    </>
  )
}