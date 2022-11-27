import React from 'react';
import { BiSearchAlt } from "react-icons/bi";
import { MdPersonSearch } from 'react-icons/md';
import './Subscribe.css';

const Subscribe = () => {
  return(
    <div className="subscribe-cards">
      <div className="subscribe">
      <BiSearchAlt className="icon"/>
        <p>
          find the best answer to your queastions,
          find the smartest way to learn,
          find the best people to work with them.
        </p>
        <button>Join Us</button>
      </div>
      <div className="subscribe teams">
        <MdPersonSearch className="icon"/>
        <p>
          do you want to find teams?
          do you want to find best people?
          here we can help you.
        </p>
        <button>Join Us</button>
      </div>
    </div>
  );
}

export default Subscribe;
