import styles from "./skills.module.scss";
import { ts, js, sql, html, gite } from "../../../../assets/images";

interface Skill {
  name: string;
  logo: string;
  year: number;
}

function Skills() {
  const mySkills: Skill[] = [
    {
      name: "Gitkraken, Git",
      year: 2,
      logo: gite,
    },
    {
      name: "SQL (MySQL, PostgreSQL)",
      year: 1,
      logo: sql,
    },
    {
      name: "HTML 5/CSS",
      year: 3,
      logo: html,
    },
    {
      name: "Javascript (Node js, React js, React Native)",
      year: 3,
      logo: js,
    },
    {
      name: "Typescript (Nest js, Angular js, IONIC)",
      year: 3,
      logo: ts,
    },
  ];
  return (
    <div className={styles.container}>
      <h3>My Skills</h3>
      <div className={styles.skillContainer}>
        {mySkills.map((skill: Skill, index: number) => (
          <div className={styles.skillCard} key={index}>
            <img alt="logo skill" src={skill.logo} />
            <h5>{skill.name}</h5>
            <h5>{skill.year} years</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
