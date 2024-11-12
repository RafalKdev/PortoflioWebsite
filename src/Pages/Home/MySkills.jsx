import data from "../../data/index.json";
import classes from "./MySkills.module.css";
import { FaNodeJs, FaGithub, FaHtml5, FaReact } from "react-icons/fa6";
const icons = {
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaGithub,
};
const MySkills = () => {
  return (
    <div className={classes.skillsSection}>
      <div className={classes.skillsSectionWrapper}>
        <h2 className={classes.skillsSectionTitle}>My Skills</h2>
      </div>
      <div className={classes.skillsSectionCard}>
        {data.skills.map((item, index) => {
          const IconComponent = icons[item.icon]; // Match icon string to component

          return (
            <div key={index} className={classes.skillsCard}>
              {IconComponent && <IconComponent size={32} />}
              <p className={classes.skillsCardTitle}>{item.title}</p>
              <p className={classes.skillsCardDescription}>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MySkills;
