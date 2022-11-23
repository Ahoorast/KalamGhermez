import {
  BrowserRouter as Router,
  Routes,
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
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/signup" element={<Signup onAddUser={onAddUserHandler}/>} exact/>
        <Route path="/login" element={<Login/>} exact/>
      </Routes>
    </Router>
  );
}

export default App;
