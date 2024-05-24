import styles from "./profile.module.scss";
import profile from "../../../../assets/images/kabil1.jpg";
import "../../../../styles/main.scss";
import Button from "../../../../components/Button/Button";

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.text}>
        <h2>Hi!👋 I am Kabil</h2>
        <h1>
          A <span className={styles.underline}>software developer</span> <br />
          from Tunisia
        </h1>
        <div className="flex-row">
          <Button
            content={"Contact me"}
            backgroundColor={"#6752ea"}
            color={"#f4f3f8"}
          />
          <Button
            content={"View portfolio"}
            backgroundColor={"#f4f3f8"}
            color={"#040415"}
          />
        </div>
      </div>
      <div className={`${"flex"} ${styles.imageContainer}`}>
        <div className={styles.cercle} />
        <div className={styles.image}>
          <img alt="Kabil photo" src={profile} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
