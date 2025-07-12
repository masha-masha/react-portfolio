import { aboutImg } from "../../assets/images";
import "./About.css";

const About = () => {
  return (
    <div className="about">
       <div>About</div>
       <img src={aboutImg} alt="about" />
    </div>
  )
}

export default About