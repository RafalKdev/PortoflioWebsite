import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { DiReact } from "react-icons/di";
import Hamburger from "hamburger-react";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={classes.navbarSection}>
      <div className={classes.navbarLogo}>
        <span className={classes.logo}>
          <DiReact />
        </span>
      </div>
      <div className={classes.hamburgerMenu}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div className={classes.navbarListWrapper}>
        {isOpen && (
          <ul className={classes.navbarLinksTwo}>
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
        )}

        {
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
        }
      </div>
    </div>
  );
};
export default Navbar;
