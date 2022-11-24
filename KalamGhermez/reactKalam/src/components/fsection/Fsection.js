import React from 'react';
import { BiSearchAlt } from "react-icons/bi";
import { BsMicrosoft } from 'react-icons/bs';
import { MdPersonSearch } from 'react-icons/md';
import { GiHumanPyramid } from 'react-icons/gi';
import { GrFacebook, GrTwitter } from 'react-icons/gr';
import './Fsection.css';

const Fsection = () => {
  return(
    <div className="fsection">
      <h1>ASK YOUR QUESTIONS!</h1>
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
      <p className="title">Every Programmer use  <b className="title__special">KalamGhermez</b></p>
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

      <h1>See our Plans.</h1>
      <div className="plans">
      <div className="plan">
        <h2>Free Plan</h2>
        <h3>0$</h3>
        <ul>
          <li>Just one question per day.</li>
          <li>Unlimited for answering.</li>
          <li>Can't join to Teams.</li>
          <li>Create one Team.</li>
        </ul>
        <button>Get Now</button>
      </div>
      <div className="plan">
        <h2>Free Plan</h2>
        <h3>0$</h3>
        <ul>
          <li>Just one question per day.</li>
          <li>Unlimited for answering.</li>
          <li>Can't join to Teams.</li>
          <li>Create one Team.</li>
        </ul>
        <button>Get Now</button>
      </div>
      <div className="plan">
        <h2>Free Plan</h2>
        <h3>0$</h3>
        <ul>
          <li>Just one question per day.</li>
          <li>Unlimited for answering.</li>
          <li>Can't join to Teams.</li>
          <li>Create one Team.</li>
        </ul>
        <button>Get Now</button>
      </div>
      </div>
      <h2>Here are some companies thar work with us</h2>
      <div className="companies">
        <div className="companies__card">
          <GrFacebook className="icon"/>
          <p>FaceBook</p>
        </div>
        <div className="companies__card">
          <GrTwitter className="icon"/>
          <p>Twitter</p>
        </div>
        <div className="companies__card">
          <BsMicrosoft className="icon"/>
          <p>Microsoft</p>
        </div>
        <div className="companies__card">
          <GrFacebook className="icon"/>
          <p>FaceBook</p>
        </div>
      </div>
      <h1>Comments by companies about us</h1>
      <div className="comments">
        <div className="comments__card">
          <p><GrFacebook  />Facebook</p>
          <p>Awsome the best site i ever seen and can't explain more how much is good</p>
          <p>Mark Zukerberg</p>
        </div>
        <div className="comments__card">
          <p><GrFacebook  />Facebook</p>
          <p>Awsome the best site i ever seen and can't explain more how much is good</p>
          <p>Mark Zukerberg</p>
        </div>
        <div className="comments__card">
          <p><GrFacebook  />Facebook</p>
          <p>Awsome the best site i ever seen and can't explain more how much is good</p>
          <p>Mark Zukerberg</p>
        </div>
      </div>
    </div>

  );
}

export default Fsection;
