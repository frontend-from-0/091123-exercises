import { List } from "./components/List";
import { Navbar } from "./components/Navbar";
import { PerformanceState } from "./components/PerformanceState";
import { useState, useContext } from "react";
import { todoData } from "./data";
import "./App.css";
import { UserContext, UserDispatchContext, UserProvider } from "./UserContext";
import { Account } from "./components/Account";
import { LoginForm } from "./components/LoginForm";

// todo : create a new Component that contains log form in form , so that user can type username adn password and click submit
// if user logged in, show Account component.
// if user is logged out, show log in componet.

export const App = () => {
  const [todos, setTodos] = useState(todoData);

  const loggedOutUser = {
    isLoggedInUser: false,
  };

  return (
    <UserProvider initialState={loggedOutUser}>
      <div className="container">
        <Navbar />
        <MainContent />
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

const MainContent = () => {
  const user = useContext(UserContext);
  return user.isLoggedInUser ? <Account /> : <LoginForm />;
};
