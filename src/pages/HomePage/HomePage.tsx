import ContactMe from "./components/contact/ContactMe";
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
        <Skills />
        <Projects />
      </div>
      <ContactMe />
    </div>
  );
}

export default HomePage;
