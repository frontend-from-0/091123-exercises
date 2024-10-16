import { List } from "./components/List";
import { Navbar } from "./components/Navbar";
import { PerformanceState } from "./components/PerformanceState";
import { todoData } from "./data";
import { UserProvider } from "./UserContext";
import "./App.css";
import { Account } from "./components/Account";
import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { LogIn } from "./components/Login";

// todo: create a new component that contains log in form, so that user can type username and password and click submit button to log in.
// if user is logged in, show account component.
//if user is logged out, show log in component.(need to use ternery operator for it in navbar)
//create a form element to show in app page

export const App = () => {
  const [todos, setTodos] = useState(todoData);
  const user = useContext(UserContext);

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
        {user.isLoggedInUser ? <Account /> : <LogIn />}
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
