import "./Home.css";
import { mainImg } from "../../assets/images";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaCircleArrowRight, FaArrowDownLong } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import {
 slideInVariants,
} from "../../utils/animation";

const Home = () => {
 const icons = [
  { id: 1, href: "", icon: <FaFacebookF /> },
  { id: 2, href: "", icon: <FaInstagram /> },
  { id: 3, href: "", icon: <FaGithub /> },
 ];

 return (
  <section className="home" id="home">
   <div className="container home-wrapper">
    <div className="media-icons">
     {icons.map((item, index) => (
      <motion.a
       href={item.href}
       key={item.id}
       custom={index}
       variants={slideInVariants("left", 0.6, -50, true )}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: false, amount: 0.5 }}
      >
       {item.icon}
      </motion.a>
     ))}
    </div>
    <div className="home-info">
     <motion.h1
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      custom={0}
      variants={slideInVariants("left", 0.5, 100, true )}
     >
      Hi, I am Ilay
     </motion.h1>
     <motion.h3
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      custom={1}
      variants={slideInVariants("left", 0.7, 120, true )}
     >
      Front-end Developer
     </motion.h3>
     <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      custom={1}
      variants={slideInVariants("left", 0.9, 60, true )}
     >
      I create stunning websites for your busness, Highly experience in web
      design and development
     </motion.p>
     <motion.a
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      custom={4}
      variants={slideInVariants("left", 0.9, 100, true )}
      href=""
      className="home-info-link inner-info-link"
     >
      <span>Contact me</span>
      <FaCircleArrowRight />
     </motion.a>
    </div>
    <motion.div
     className="home-img"
     initial="hidden"
     whileInView="visible"
     viewport={{ once: false, amount: 0.5 }}
     custom={1}
     variants={slideInVariants("right", 0.9, 150, false )}
    >
     <img src={mainImg} alt="main image" />
    </motion.div>
   </div>
   <a href="#about" className="scroll-down">
    Scroll down
    <FaArrowDownLong />
   </a>
  </section>
 );
};

export default Home;
