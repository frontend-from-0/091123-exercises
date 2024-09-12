import './styles.css';

export const List = ({ todos, updateTodos }) => {

	function handleClick(id) {
		updateTodos((prevState) =>
			prevState.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	}

    //Removing the to-do item fragment
	function handleRemove(id) {
		updateTodos((prevState) => prevState.filter((todo) => todo.id !== id));
	}

	
	return (
		<ul className='todo__list'>
			{todos.map((item) => (
				<li key={item.id}>
					<span
						onClick={() => handleClick(item.id)}
						className={item.completed ? 'completed' : ''}
					>
						{item.title}
					</span>
					<button className='btn' onClick={() => handleRemove(item.id)}>X</button>
				</li>
			))}
		</ul>
	);
};

