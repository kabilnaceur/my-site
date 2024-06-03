import styles from "./navbar.module.scss";
import { FC, useEffect, useState } from "react";
import "../../../../styles/main.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { TfiLinkedin } from "react-icons/tfi";
import { FaStackOverflow } from "react-icons/fa";

export interface navbarProps {
  handleClickToContact: () => void;
  handleClickToAbout: () => void;
  handleClickToProjects: () => void;
}

const Navbar: FC<navbarProps> = ({
  handleClickToProjects,
  handleClickToAbout,
  handleClickToContact,
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleShow = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 700) {
        setShowMenu(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`${styles.nav}`}>
      <div className={`flex-row space-between ${styles.divLogo}`}>
        {" "}
        <button className={styles.logoButton}>
          <div className={styles.masked} data-content="Kabil Naceur"></div>
        </button>
        <button onClick={handleShow} className={styles.buttonMenu}>
          <AiOutlineMenu className={styles.icon} />
        </button>
      </div>

      <ul className={showMenu ? styles.show : ""}>
        <li onClick={() => handleClickToAbout()}>
          About me
          <div className={`${styles.divItem} `} />
        </li>
        <li onClick={() => handleClickToProjects()}>
          Projects
          <div className={`${styles.divItem} `} />
        </li>
        <li onClick={() => handleClickToContact()}>
          Contact me
          <div className={`${styles.divItem}`} />
        </li>
        <li>
          <div className={`${styles.contact2} }`}>
            <TfiLinkedin className={styles.icon} />{" "}
            <SiGithub className={styles.icon} />{" "}
            <FaStackOverflow className={styles.icon} />
          </div>
        </li>
      </ul>
      <div className={`${styles.contact} `}>
        <TfiLinkedin className={styles.icon} />{" "}
        <SiGithub className={styles.icon} />{" "}
        <FaStackOverflow className={styles.icon} />
      </div>
    </nav>
  );
};

export default Navbar;
