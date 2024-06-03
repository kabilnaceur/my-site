import styles from "./profile.module.scss";
import { profile } from "../../../../assets/images";
import "../../../../styles/main.scss";
import Button from "../../../../components/Button/Button";

function Profile() {
  return (
    <div className={styles.profileContainer} data-aos="fade-left">
      <div className={`${"flex"} ${styles.imageContainer}`}>
        <div className={styles.cercle} />
        <div className={styles.image}>
          <img alt="Kabil photo" src={profile} />
        </div>
      </div>
      <div className={styles.text} data-aos="fade-right">
        <h2>Hi!👋 I am Kabil</h2>
        <h1>
          A <span className={styles.underline}>software developer</span> <br />
          from Tunisia
        </h1>
        <div className={styles.flexRow}>
          <div className={styles.buttonContainer}>
            {" "}
            <Button
              content={"Contact me"}
              backgroundColor={"#6752ea"}
              color={"#f4f3f8"}
            />
          </div>
          <Button
            content={"View portfolio"}
            backgroundColor={"#f4f3f8"}
            color={"#040415"}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
