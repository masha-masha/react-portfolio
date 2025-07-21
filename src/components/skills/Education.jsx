import education from "../../data/education";

const Education = () => {
 return (
  <div className="education">
   <h4 className="label">Education</h4>
   <ul className="education-list">
      {education.map(({ year, degree, institution}, index) => (
         <li className="item" key={index}>
           <span className="year">{year}</span>
           <p>{degree} - {institution}</p>
         </li>
      ))}
   </ul>
  </div>
 );
};

export default Education;
