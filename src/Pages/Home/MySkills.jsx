import data from "../../data/index.json";
import classes from "./MySkills.module.css";

const MySkills = () => {
  return (
    <section className={classes.skillsSection}>
      <div className={classes.skillsHeaderContainer}>
        <div className={classes.skillsHeader}>
          <h2 className={classes.skillsHeaderTitle}>My Skills</h2>
        </div>
      </div>

      <div className={classes.skillsContainer}>
        {data?.skills?.map((item, index) => (
          <div key={index} className={classes.skillsSectionCard}>
            <img className={classes.skillsImg} src={item.src} alt="photo" />

            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
