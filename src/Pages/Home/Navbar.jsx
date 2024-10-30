import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { DiReact } from "react-icons/di";
const Navbar = () => {
  return (
    <div className={classes.navbarSection}>
      <div className={classes.navbarLogo}>
        <span className={classes.logo}>
          <DiReact />
        </span>
      </div>
      <div className={classes.navbarListWrapper}>
        <ul className={classes.navbarLinks}>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Portfolio</Link>
          </li>
          <li>
            <Link>AboutMe</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
