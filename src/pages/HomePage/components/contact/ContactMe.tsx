import styles from "./contactMe.module.scss";
import { profile } from "../../../../assets/images";
import { TfiFacebook, TfiLinkedin } from "react-icons/tfi";
import { SiGithub } from "react-icons/si";
import Button from "../../../../components/Button/Button";

function ContactMe() {
  return (
    <div className={styles.container}>
      <div>
        <h2>Are you interested?</h2>
        <h2>Say hi!</h2>
        <div className={styles.imageContainer}>
          <img alt="Kabil photo" src={profile} />
          <div className={styles.information}>
            <h3>Kabil Naceur</h3>
            <h4>Front-end developer</h4>
            <div className={`${styles.contact} `}>
              <TfiLinkedin className={styles.icon} />{" "}
              <SiGithub className={styles.icon} />{" "}
              <TfiFacebook className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.links}>
          <a>About me</a>
          <a>Projects</a>
        </div>
      </div>
      <div className={styles.contactContainer}>
        <div>
          <input placeholder="Your Email" />
          <input placeholder="Your meassage" />
          <Button
            content={"Send message"}
            color={"#6752ea"}
            backgroundColor={"#f4f3f8"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
