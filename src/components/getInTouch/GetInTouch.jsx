import "./GetInTouch.css";
import { FaPaperPlane } from "react-icons/fa";

const GetInTouch = () => {
 return (
  <section class='get-in-touch sub-section'>
   <div class='container flex-center'>
    <div class='contact-card'>
     <div class='title'>
      <h4>LET'S TALK</h4>
      <h3>ABOUT YOUR</h3>
      <h2>NEXT PROJECT</h2>
     </div>
     <a href='' class='get-in-touch-link inner-info-link'>
      Contact me
      <FaPaperPlane/>
     </a>
    </div>
   </div>
  </section>
 );
};

export default GetInTouch;
