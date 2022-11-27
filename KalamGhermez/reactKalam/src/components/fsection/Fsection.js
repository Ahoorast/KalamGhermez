import React from 'react';
import Subscribe from './Subscribe';
import Plan from './Plan';
import Companies from './Companies';
import Community from './Community';
import Comments from './Comments';
import Users from './Users';
import Benefits from './Benefits';
import './Fsection.css';

const Fsection = () => {
  return(
    <div className="fsection">
      <h1>ASK YOUR QUESTIONS!</h1>
      <Subscribe />
      <p className="title">Every Programmer use  <b className="title__special">KalamGhermez</b></p>
      <Community />
      <Plan />
      <Companies />
      <Comments />
      <Users />
      <Benefits />
    </div>
  );
}

export default Fsection;
