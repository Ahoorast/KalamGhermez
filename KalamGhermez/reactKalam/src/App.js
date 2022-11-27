import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React from 'react';
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import LastQuestion from './components/lastQuestion/LastQuestion';
import About from './components/about/About';
import Products from './components/products/Products';
import Heros from './components/heros/Heros';



function App() {

  const onAddUserHandler = (content) => {
    console.log(content);
  }

  const onCheckLoginHandler = (content) => {
    console.log(content);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/signup" element={<Signup onAddUser={onAddUserHandler}/>} exact/>
        <Route path="/login" element={<Login onCheckLogin={onCheckLoginHandler}/>} exact/>
        <Route path="/lastquestion" element={<LastQuestion />} exact/>
        <Route path="/about" element={<About />} exact/>
        <Route path="/products" element={<Products />} exact/>
        <Route path="/heros" element={<Heros />} exact/>
      </Routes>
    </Router>
  );
}

export default App;
