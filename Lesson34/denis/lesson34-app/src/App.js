import { List } from "./components/List";
import { Navbar } from "./components/Navbar";
import { PerformanceState } from "./components/PerformanceState";
import { useState } from "react";
import { todoData } from "./data";
import "./App.css";
import { UserProvider } from "./UserContext";
import { Account } from "./components/Account";

// todo : create a new Component that contains log form in form , so that user can type username adn password and click submit
// if user logged in, show Account component.
// if user is logged out, show log in componet.

export const App = () => {
  const [todos, setTodos] = useState(todoData);

  const loggedInUser = {
    isLoggedInUser: true,
    username: "johndoe01",
  };
  const loggedOutUser = {
    isLoggedInUser: false,
  };

  return (
    <UserProvider initialState={loggedOutUser}>
      <div className="container">
        <Navbar />
        <Account />
        <div className="app">
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
