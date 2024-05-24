import ContactMe from "./components/contact/ContactMe";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import styles from "./homePage.module.scss";
function HomePage() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Profile />
      </div>
      <ContactMe />
    </div>
  );
}

export default HomePage;
