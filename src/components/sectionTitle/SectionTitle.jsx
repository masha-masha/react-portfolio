import { titleVariants, subtitleVariants } from "../../utils/animation";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import "./SectionTitle.css";



const SectionTitle = ({ title, subtitle }) => {
 return (
  <>
   <motion.h2 className="inner-title"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amout: 0.5}}
    variants={titleVariants}
   >{title}
   
   </motion.h2>
   <motion.h3 className="inner-second-title"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amout: 0.5}}
    variants={subtitleVariants}
   >{subtitle}</motion.h3>
  </>
 );
};

export default SectionTitle;
