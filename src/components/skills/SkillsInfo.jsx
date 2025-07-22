import "./Skills.css";
import SectionTitle from "../sectionTitle/SectionTitle";
import Education from "./Education";
import Awards from "./Awards";
import Skills from "./Skills";

const SkillsInfo = () => {
 return (
  <section className="skills section" id="skills">
   <div className="container flex-center">
    <SectionTitle title="Skills" subtitle="Skills" />
    <div className="inner-content">
     <div className="skills-description">
      <h3>Education & Skills</h3>
      <p>
       For more than 5 years our experts have been accomplishing enough with
       modern Web
      </p>
      <p>Development, new generation web and app programming language.</p>
     </div>
     <div className="skills-info">
        <Education/>
     <div className="education">
      <h4 className="label">Skills</h4>
       <Skills/>
     </div>
     <div className="education">
      <h4 className="label">Awards</h4>
       <Awards/>
     </div>
     </div>
    </div>
    <div className="education work-exp">
     <h3 claaName="work-exp-title">Work & Experience</h3>
     <div className="skills-info">
      <div className="experience-card">
       <div className="upper">
        <h5></h5>
        <h3></h3>
        <span></span>
       </div>
       <div className="hr"></div>
       <h4></h4>
       <p></p>
      </div>
      <div className="experience-card">
        <div className="upper">
        <h5></h5>
        <h3></h3>
        <span></span>
       </div>
       <div className="hr"></div>
       <h4></h4>
       <p></p>
      </div>
      <div className="experience-card">
        <div className="upper">
        <h5></h5>
        <h3></h3>
        <span></span>
       </div>
       <div className="hr"></div>
       <h4></h4>
       <p></p>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default SkillsInfo;
