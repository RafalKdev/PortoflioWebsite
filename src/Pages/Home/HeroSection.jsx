import classes from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <section className={classes.heroSection}>
      <div className={classes.heroSectionWrapper}>
        <div className={classes.heroSectionContent}>
          <p className={classes.heroSectionTitle}>Hi, my name is Rafal</p>
          <h1 className={classes.heroSectionText}>
            <span className={classes.heroSectionColor}>React</span> <br />
            Frontend Developer
          </h1>
          <p className={classes.heroSectionDescription}>
            I code and create beautifully simple things, and I love what I do.
          </p>
        </div>
        <button className={classes.heroButton}>Get in Touch</button>
      </div>
    </section>
  );
};

export default HeroSection;
