import { GrFacebook, GrTwitter } from 'react-icons/gr';
import './Comments.css';


const Comments = () => {
  return(
    <>
    <div className="comments__title"><h1>Comments by companies about us</h1></div>
    <div className="comments">
      <div className="back"></div>
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
        <p><GrTwitter  />Facebook</p>
        <p>Awsome the best site i ever seen and can't explain more how much is good</p>
        <p>Mark Zukerberg</p>
      </div>
      <div className="back__bottom"></div>
    </div>
    </>
  );
}


export default Comments;
