import "./Home.css";
import { mainImg } from "../../assets/images";
import { FaFacebookF,  FaInstagram, FaGithub} from "react-icons/fa";
import { FaCircleArrowRight, FaArrowDownLong } from "react-icons/fa6";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container home-wrapper">
        <div className="media-icons">
          <a href="">
            <FaFacebookF/>
          </a>
          <a href="">
            <FaInstagram/>
          </a>
          <a href="">
            <FaGithub/>
          </a>
        </div>
        <div className="home-info">
          <h1>Hi, I am Ilay</h1>
          <h3>Front-end Developer</h3>
          <p>I create stunning websites for your busness, Highly experience in web design and development</p>
          <a href="" className="home-info-link inner-info-link">
            <span>Contact me</span>
            <FaCircleArrowRight />
          </a>
        </div>
        <div className="home-img">
          <img src={mainImg} alt="main image" />
        </div>
      </div>
      <a href="#about" class="scroll-down">
        Scroll down
        <FaArrowDownLong/>
      </a>
    </section>
  )
}

export default Home