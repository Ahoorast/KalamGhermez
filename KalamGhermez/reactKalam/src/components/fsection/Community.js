import React from 'react';
import { GiHumanPyramid } from 'react-icons/gi';
import './Community.css';


const Commiunity = () => {
  return(

    <>
      <h2>Last News about our community</h2>
      <p>Every day this part updated</p>
      <div className="community__inf">
        <div className="community__inf-card">
          <GiHumanPyramid  className="icon"/>
          <h2>3000+</h2>
          <p>New Users in our site</p>
        </div>
        <div className="community__inf-card">
          <GiHumanPyramid className="icon"/>
          <h2>3000+</h2>
          <p>New Users in our site</p>
        </div>
        <div className="community__inf-card">
          <GiHumanPyramid className="icon"/>
          <h2>3000+</h2>
          <p>New Users in our site</p>
        </div>
        <div className="community__inf-card">
          <GiHumanPyramid className="icon"/>
          <h2>3000+</h2>
          <p>New Users in our site</p>
        </div>
      </div>
    </>
  );
}

export default Commiunity;
