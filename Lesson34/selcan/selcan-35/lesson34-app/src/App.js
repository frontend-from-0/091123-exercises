import { List } from './components/List';
import Navbar from './components/Navbar';
import { PerformanceState } from './components/PerformanceState';
import { useState } from 'react';
import { todoData } from './data';
import { UserProvider } from './userContext';
import Account from './components/Account';
import LoginForm from './components/LoginForm';

import './App.css';


// TODO: Create a new Component that contains log in form, so that user can type username and password and click submit button to log in.
// If user is logged in, show Account component. 
// If user is logged out, show Log In component.


export const App = () => {
	const [todos, setTodos] = useState(todoData);

	const loggedOutUser = {
		isLoggedInUser: false
	};

	return (
		<UserProvider initialState={loggedOutUser}>

			<div className='container'>
				<Navbar />
				<LoginForm />
				<Account />
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
