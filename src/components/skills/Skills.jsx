import { skills } from "../../data/skills"

const Skills = () => {
  return (
     <ul className="bars">
      {skills.map(({ skill, level }, index) => (
         <li className="bar" key={index}>
        <div className="info">
         <span>{skill}</span>
         <span>{level}</span>
        </div>
        <div className={`line ${skill}`}></div>
       </li>
      ))}
      </ul>
  )
}

export default Skills