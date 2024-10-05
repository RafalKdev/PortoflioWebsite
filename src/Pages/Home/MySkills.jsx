import data from "../../data/index.json";
import classes from "./MySkills.module.css";

const MySkills = () => {
  return (
    <section className={classes.skillsSection}>
      <div>
        <p>My Skills</p>
        <h2>My Expertise</h2>
      </div>
      <div>
        {data?.skills?.map((item, index) => (
          <div key={index}>
            <div>
              <img className={classes.skillsImg} src={item.src} alt="photo" />
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
