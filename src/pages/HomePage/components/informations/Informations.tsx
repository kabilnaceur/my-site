import { useEffect, useRef, useState } from "react";
import styles from "./informations.module.scss";
interface Information {
  title: string;
  description: string;
  number: string;
}
function Informations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const circle = circleRef.current;
    let newHighlight: HTMLDivElement | null = null;

    if (!container || !circle) return;

    const handleAnimation = () => {
      const circleRect = circle.getBoundingClientRect();
      const containers = container.querySelectorAll(
        `.${styles.informationContainer}`
      );

      containers.forEach((infoContainer: any) => {
        const infoRect = (
          infoContainer as HTMLDivElement
        ).getBoundingClientRect();
        // Check if the circle is overlapping the information container
        if (
          circleRect.right > infoRect.left + 50 &&
          circleRect.left < infoRect.right + 50 &&
          circleRect.bottom > infoRect.top + 50 &&
          circleRect.top < infoRect.bottom + 50
        ) {
          containers.forEach((container) => {
            container.classList.remove(styles.informationContainerhover);
          });

          infoContainer.classList.add(styles.informationContainerhover);
        } else {
          infoContainer.classList.remove(styles.informationContainerhover);
          infoContainer.classList.add(styles.informationContainer);
        }
      });
    };

    const animationFrame = () => {
      handleAnimation();
      requestAnimationFrame(animationFrame);
    };

    requestAnimationFrame(animationFrame);
  }, []);

  const informations: Information[] = [
    {
      number: "5",
      description:
        "Higher Institute of Applied Sciences and Technology of Sousse <br/> National Engineer Diploma in Software Engineering <br/> September 2017 – June 2022",
      title: "Years of education",
    },
    {
      number: "1+",
      description:
        "During my year-plus tenure as a software engineer, I have honed my skills in full-stack development, contributing to several successful projects. I consistently delivered high-quality, scalable code while collaborating effectively with cross-functional teams. ",
      title: "Years of experiance",
    },
    {
      number: "+5",
      description:
        "I have optimized user interfaces for intuitive navigation (40% increase in user satisfaction), ensured robust security measures for data protection (50% reduction in security incidents), and employed agile methodologies for high-performance web solutions (30% improvement in delivery time).",
      title: "Projects",
    },
  ];
  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.circle} ref={circleRef} />
      {informations.map((information: Information, index: number) => (
        <div key={index} className={styles.informationContainer}>
          <div className={styles.informationText}>
            <h3>{information.number}</h3>
            <h3>{information.title}</h3>
          </div>
          <div className={styles.description}>
            {information.description.split("<br/>").map((line, index) => (
              <h3 key={index}>{line}</h3>
            ))}{" "}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Informations;
