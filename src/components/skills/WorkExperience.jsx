import { workExperience } from '../../data/WorkExperience';

const WorkExperience = () => {
 return (
  <div className="skills-info">
   {workExperience.map(
    ({ title, employment, period, company, description }, index) => (
     <div class='experience-card' key={index}>
      <div class='upper'>
       <h3>{title}</h3>
       <h5>{employment}</h5>
       <span>{period}</span>
      </div>
      <div class='hr'></div>
      <h4 class='label'>{company}</h4>
      <p>{description}</p>
     </div>
    )
   )}
  </div>
 );
};

export default WorkExperience;
