import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';



function App() {

  const onAddUserHandler = (content) =>{
    console.log(content);
  }
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
        <Route path="/signup">
          <Signup onAddUser={onAddUserHandler}></Signup>
        </Route>

        <Route path="/login">
	       <Login></Signup>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
