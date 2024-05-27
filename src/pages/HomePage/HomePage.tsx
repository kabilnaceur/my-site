import ContactMe from "./components/contact/ContactMe";
import Informations from "./components/informations/Informations";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import styles from "./homePage.module.scss";
function HomePage() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Profile />
      </div>
      <Informations />
      <div className={styles.container}>
        <Skills />
        <Projects />
      </div>
      <ContactMe />
    </div>
  );
}

export default HomePage;
