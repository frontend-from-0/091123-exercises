import { List } from './components/List';
import { Navbar } from './components/Navbar';
import { PerformanceState } from './components/PerformanceState';
import { useState, useContext } from 'react';
import { todoData } from './data';
import { UserProvider , UserContext} from './UserContext';
import {Account} from './components/Account'
import { LoginForm } from './components/LoginForm';
import './App.css';


const ShowContent = () => {
	const user = useContext(UserContext);
	return user.isLoggedInUser ? <Account /> : <LoginForm />;
  };

export const App = () => {
	const [todos, setTodos] = useState(todoData);

	// const loggedInUser = {
	// 	isLoggedInUser: true,
	// 	username: "johndoe01"
	// };
	const loggedOutUser = {
		isLoggedInUser: false
	};

	return (
		<UserProvider initialState={loggedOutUser}>
		<div className='container'>
			<Navbar />
			<ShowContent />
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


