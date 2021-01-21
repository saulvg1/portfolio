//component imports
import Skill from '../components/Skill.js';
import skillsData from '../data/data.js';

export default function Skills() {
  return (
    <div className="skills">
      <div className="skillsInfo">
        <h2>Skills</h2>
        <div className="underline"></div>
      </div>
      <div className="skillsCollection">
        {skillsData.map((skill, index) => {
          return (
            <Skill
              className="skill"
              image={skill.skillImage}
              name={skill.skillName}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
