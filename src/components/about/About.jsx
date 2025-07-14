import { aboutImg } from '../../assets/images';
import { FaDownload } from "react-icons/fa";
import './About.css';

const About = () => {
 return (
  <section className='about section' id='about'>
   <div className='container flex-center'>
    <h2 className='inner-title'>About me</h2>
    <h3 className='inner-second-title'>About me</h3>
    <div className='about-wrapper'>
     <div className='about-img'>
      <img src={aboutImg} alt='about' />
     </div>
     <div className='about-info'>
      <div className='description'>
       <h3>I'm Ilay</h3>
       <h4>
        A Lead <span>Front-end Developer</span>
       </h4>
       <p>
        I design and develop services for customers specializing creating
        stylish, modern websites, web services and online stores. My passion is
        to design digital user experiences through meaningful interactions.
        Check out my Portfolio
       </p>
      </div>
      <ul className="professional-list">
        <li className="list-item">
          <span className="number">5+</span>
          <span className="text">Years of experience</span>
        </li>
        <li className="list-item">
          <span className="number">3k</span>
          <span className="text">Happy customers</span>
        </li>
        <li className="list-item">
          <span className="number">5+</span>
          <span className="text">Success project</span>
        </li>
      </ul>
      <a href="" className="inner-info-link">
        Download
        <FaDownload/>
      </a>
     </div>
    </div>
   </div>
  </section>
 );
};

export default About;
