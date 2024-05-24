import styles from "./navbar.module.scss";
import { useEffect, useState } from "react";
import "../../../../styles/main.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { TfiFacebook, TfiLinkedin } from "react-icons/tfi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleShow = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = (item: number): void => {
    console.log("kbil");
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
        <div className={`${styles.contact2} `}>
          <TfiLinkedin className={styles.icon} />{" "}
          <SiGithub className={styles.icon} />{" "}
          <TfiFacebook className={styles.icon} />
        </div>
        <button onClick={handleShow} className={styles.buttonMenu}>
          <AiOutlineMenu className={styles.icon} />
        </button>
      </div>

      <ul className={showMenu ? styles.show : ""}>
        <li onClick={() => handleClick(1)}>
          About me
          <div className={`${styles.divItem} `} />
        </li>
        <li onClick={() => handleClick(2)}>
          Projects
          <div className={`${styles.divItem} `} />
        </li>
        <li onClick={() => handleClick(5)}>
          Contact
          <div className={`${styles.divItem}`} />
        </li>
      </ul>
      <div className={`${styles.contact} }`}>
        <TfiLinkedin className={styles.icon} />{" "}
        <SiGithub className={styles.icon} />{" "}
        <TfiFacebook className={styles.icon} />
      </div>
    </nav>
  );
};

export default Navbar;
