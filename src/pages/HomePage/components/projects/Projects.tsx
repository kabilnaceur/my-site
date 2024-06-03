import Button from "../../../../components/Button/Button";
import styles from "./projects.module.scss";
import {
  cynoia,
  gcs,
  juricar,
  myform,
  siteflow,
} from "../../../../assets/images";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FC, useState } from "react";

interface Project {
  company: string;
  location: string;
  period: string;
  jobTitle: string;
  image: string;
  backgroundColor: string;
  color: string;
  textColor: string;
}

export interface projectsprops {
  scrollableProjectsRef: any;
}

const Projects: FC<projectsprops> = ({ scrollableProjectsRef }) => {
  const myProjects: Project[] = [
    {
      company: "Siteflow Company",
      location: "Sousse, TN",
      period: "July 2023 – Present",
      jobTitle: "Frontend Developer",
      image: siteflow,
      backgroundColor: "#b8b5c6",
      color: "#040415",
      textColor: "#7f7f82",
    },
    {
      company: "Juricar Company",
      location: "Remote",
      period: "December 2022 – June 2023",
      jobTitle: "Web developer freelancer",
      image: juricar,
      backgroundColor: "#6752ea",
      color: "#f4f3f8",
      textColor: "#b9b5fe",
    },
    {
      company: "Diamond Service expert",
      location: "Sousse, TN",
      period: "October 2022 – May 2023",
      jobTitle: "Software developer",
      image: gcs,
      backgroundColor: "#b8b5c6",
      color: "#040415",
      textColor: "#7f7f82",
    },
    {
      company: "My form APP",
      location: "Remote",
      period: "May 2023",
      jobTitle: "Frontend Developer",
      image: myform,
      backgroundColor: "#6752ea",
      color: "#f4f3f8",
      textColor: "#b9b5fe",
    },
    {
      company: "Cynoia Company",
      location: "Tunis, TN",
      period: "February 2022 – september 2022",
      jobTitle: "Mobile developer inter",
      image: cynoia,
      backgroundColor: "#b8b5c6",
      color: "#040415",
      textColor: "#7f7f82",
    },
  ];
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? myProjects : myProjects.slice(0, 3);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <div className={styles.container} ref={scrollableProjectsRef}>
      <h3>My Projects</h3>
      <div className={styles.projectsContainer}>
        {displayedProjects.map((project: Project, index: number) => (
          <div
            className={styles.prjectCard}
            key={index}
            style={{
              backgroundColor: project.backgroundColor,
              color: project.color,
            }}
          >
            <div className={styles.projectinformation}>
              <div>
                <h3>{project.company}</h3>
                <h5>{project.jobTitle}</h5>
              </div>
              <div style={{ color: project.textColor, marginLeft: 10 }}>
                <h5>{project.period}</h5>
                <div>
                  <FaMapMarkerAlt className={styles.icon} />
                  <h5>{project.location}</h5>
                </div>
              </div>
            </div>
            <div className={styles.projectImage}>
              <img alt="project image" src={project.image} />
            </div>
          </div>
        ))}
        <Button
          content={showAll ? "View less" : "View more"}
          backgroundColor={"#6752ea"}
          color={"#f4f3f8"}
          onClick={toggleShowAll}
        />
      </div>
    </div>
  );
};

export default Projects;
