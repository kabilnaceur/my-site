import { useEffect, useRef, useState } from "react";
import ContactMe from "./components/contact/ContactMe";
import Informations from "./components/informations/Informations";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import styles from "./homePage.module.scss";
import { FiArrowUp } from "react-icons/fi";

function HomePage() {
  const scrollableContactRef = useRef<HTMLDivElement>(null);
  const scrollableProjectsRef = useRef<HTMLDivElement>(null);
  const scrollableAboutRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<Boolean>(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleClickToAbout = (): void => {
    scrollableAboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickToProjects = (): void => {
    scrollableProjectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickToContact = (): void => {
    scrollableContactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div>
      <Navbar
        handleClickToContact={handleClickToContact}
        handleClickToAbout={handleClickToAbout}
        handleClickToProjects={handleClickToProjects}
      />
      <div className={styles.container}>
        <Profile handleClickToContact={handleClickToContact} />
      </div>
      <Informations scrollableAboutRef={scrollableAboutRef} />
      <div className={styles.container}>
        <Skills />
        <Projects scrollableProjectsRef={scrollableProjectsRef} />
      </div>
      <ContactMe
        scrollableContactRef={scrollableContactRef}
        handleClickToAbout={handleClickToAbout}
        handleClickToProjects={handleClickToProjects}
      />
      <div className={styles.buttonContainer}>
        {isVisible ? (
          <button
            type="button"
            onClick={scrollToTop}
            className={styles.floatenButton}
          >
            <FiArrowUp className={styles.icon} aria-hidden="true" />
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default HomePage;
