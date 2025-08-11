import { workExperience } from "../../data/WorkExperience";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import {
 slideInVariants,
} from "../../utils/animation";

const WorkExperience = () => {
 return (
  <div className="skills-info">
   {workExperience.map(
    ({ title, employment, period, company, description }, index) => (
     <motion.div 
         className="experience-card"
         key={index}
         custom={index}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false, amout: 0.5}}
         variants={slideInVariants("top", 0.7, 50, true)}
     >
      <div className="upper">
       <h3>{title}</h3>
       <h5>{employment}</h5>
       <span>{period}</span>
      </div>
      <div className="hr"></div>
      <h4 className="label">{company}</h4>
      <p>{description}</p>
     </motion.div>
    )
   )}
  </div>
 );
};

export default WorkExperience;
