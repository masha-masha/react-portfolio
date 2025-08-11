import "./Skills.css";
import SectionTitle from "../sectionTitle/SectionTitle";
import Education from "./Education";
import Awards from "./Awards";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import {
 slideInVariants,
} from "../../utils/animation";

const SkillsInfo = () => {
 return (
  <section className="skills section" id="skills">
   <div className="container flex-center">
    <SectionTitle title="Skills" subtitle="Skills" />
    <div className="inner-content">
     <motion.div className="skills-description"
       custom={0}
       variants={slideInVariants("left", 0.6, 100, true )}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: false, amount: 0.5 }}
     >
      <h3>Education & Skills</h3>
      <p>
       For more than 5 years our experts have been accomplishing enough with
       modern Web
      </p>
      <p>Development, new generation web and app programming language.</p>
     </motion.div>
     <div className="skills-info">
      <motion.div
       custom={1}
       variants={slideInVariants("left", 0.7, 100, true )}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: false, amount: 0.5 }}
      >
         <Education/>
      </motion.div>
      <motion.div
       custom={2}
       variants={slideInVariants("left", 0.7, 100, true )}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: false, amount: 0.5 }}
      >
        <div className="education">
      <h4 className="label">Skills</h4>
       <Skills/>
     </div>
      </motion.div>
      <motion.div
       custom={3}
       variants={slideInVariants("left", 0.7, 100, true )}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: false, amount: 0.5 }}
      > 
     <div className="education">
      <h4 className="label">Awards</h4>
       <Awards/>
     </div>
      </motion.div>
     </div>
    </div>
    <div className="education work-exp">
     <motion.h3 
        className="work-exp-title"
         custom={2}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false, amout: 0.5}}
         variants={slideInVariants("top", 0.7, 50, true)}
     >
      Work & Experience</motion.h3>
    <WorkExperience/>
    </div>
   </div>
  </section>
 );
};

export default SkillsInfo;
