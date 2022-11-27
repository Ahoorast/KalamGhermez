import { BsMicrosoft } from 'react-icons/bs';
import { GrFacebook, GrTwitter } from 'react-icons/gr';
import  './Companies.css';

const Companies = () => {
  return(
    <>
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
    </>
  )
}


export default Companies;
