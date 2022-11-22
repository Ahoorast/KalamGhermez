import './App.css';
import React from 'react';
import Signup from './components/signup/Signup';


function App() {

  const onAddUserHandler = (content) =>{
    console.log(content);
  }
  return (
    <div className="App">
	  <Signup onAddUser={onAddUserHandler}></Signup>
    </div>
  );
}

export default App;
