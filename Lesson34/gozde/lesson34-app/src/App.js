import { List } from './components/List';
import { Navbar } from './components/Navbar';
import { PerformanceState } from './components/PerformanceState';
import { todoData } from './data';
import { UserProvider } from './UserContext';
import './App.css';
import { Account } from './components/Account';
import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';



// todo: create a new component that contains log in form, so that user can type username and password and click submit button to log in.
// if user is logged in, show account component.
//if user is logged out, show log in component.(need to use ternery operator for it in navbar)
//create a form element to show in app page 


export const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN', payload: { username } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User Name:</label>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type='submit'>Log In</button>
    </form>
  );
};



export const App = () => {
	const [todos, setTodos] = useState(todoData);

	const loggedInUser = {
	  isLoggedInUser: true,
	  username: "johndoe01"
	 };
	const loggedOutUser = {
	  isLoggedInUser: false
	 };

	return (
		<UserProvider initialState={loggedOutUser}>
		<div className='container'>
			<Navbar />
			<Account></Account>
			<div className='app'>
				<List todos={todos} updateTodos={setTodos} />

				<PerformanceState
					completedTodos={todos.filter((todo) => todo.completed).length}
					totalTodos={todos.length}
				/>
			</div>
		</div>
		</UserProvider>
	);
};
