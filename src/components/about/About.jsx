import { aboutImg } from "../../assets/images";
import "./About.css";

const About = () => {
  return (
    <section className="about section" id="about">
       <div className="container flex-container">
        <h2 className="inner-title">About me</h2>
        <h3 className="inner-second-title">About me</h3>
        <div className="about-wrapper">
          <div className="about-img">
            <img src={aboutImg} alt="about" />
          </div>
          <div className="about-info">
            <div className="description">
              <h3>I'm Ilay</h3>
              <h4>A Lead <span>Front-end Developer</span></h4>
              <p>
                I design and develop services for customers
              </p>
            </div>
          </div> 
        </div>
       </div>
    </section>
  )
}

export default About