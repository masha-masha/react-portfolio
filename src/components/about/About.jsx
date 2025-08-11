import { aboutImg } from "../../assets/images";
import { FaDownload } from "react-icons/fa";
import SectionTitle from "../sectionTitle/SectionTitle";
import "./About.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation";
import { profList } from "../../data/proflist";

const About = () => {
 return (
  <section className="about section" id="about">
   <div className="container flex-center">
    <SectionTitle title="About me" subtitle="About me" />
    <div className="about-wrapper">
     <motion.div
      className="about-img"
      variants={slideInVariants("left", 0.9, 100, true)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
     >
      <img src={aboutImg} alt="about" />
     </motion.div>
     <div className="about-info">
      <div className="description">
       <motion.h3
        custom={0}
        variants={slideInVariants("left", 0.5, 50, true)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
       >
        I"m Ilay
       </motion.h3>
       <motion.h4
        variants={slideInVariants("left", 0.9, 100, true)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
       >
        A Lead <span>Front-end Developer</span>
       </motion.h4>
       <motion.p
        variants={slideInVariants("left", 0.9, 100, true)}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ once: false, amount: 0.5 }}
       >
        I design and develop services for customers specializing creating
        stylish, modern websites, web services and online stores. My passion is
        to design digital user experiences through meaningful interactions.
        Check out my Portfolio
       </motion.p>
      </div>
      <ul className="professional-list">
       {profList.map((item, index) => (
        <motion.li className="list-item" 
        key={item.id}
        href={item.href}
        custom={index}
        variants={slideInVariants("right", 0.6, 40, true )}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        >
         <span className="number">{item.number}</span>
         <span className="text">{item.text}</span>
        </motion.li>
       ))}
      </ul>
      <a href="" className="inner-info-link">
       Download
       <FaDownload />
      </a>
     </div>
    </div>
   </div>
  </section>
 );
};

export default About;
