import React from "react";
import SkillBar from "react-skillbars";
import styles from "../css/Skils.module.css";
import "../css/Skils.css";

const Skills = () => {
  const skills = [
    {
      type: "HTML",
      level: 100,
      color: {
        bar: "#5a68a5",
        title: { text: "#fff", background: "#2c3e50" },
      },
    },
    {
      type: "CSS",
      level: 80,
      color: {
        bar: "#5a68a5",
        title: { text: "#fff", background: "#2c3e50" },
      },
    },
    {
      type: "Javascript",
      level: 70,
      color: {
        bar: "#5a68a5",
        title: { text: "#fff", background: "#2c3e50" },
      },
    },
    {
      type: "Jquery",
      level: 80,
      color: {
        bar: "#5a68a5",
        title: { text: "#fff", background: "#2c3e50" },
      },
    },
  ];
  const skills2 = [
    {
      type: "BootStrap",
      level: 75,
      color: {
        bar: "#5a68a5",
        title: { text: "#fff", background: "#2c3e50" },
      },
    },
    {
      type: "React",
      level: 80,
      color: {
        bar: "#5a68a5",
        title: { text: "#fff", background: "#2c3e50" },
      },
    },
    {
      type: "node.js",
      level: 70,
      color: {
        bar: "#5a68a5",
        title: { text: "#fff", background: "#2c3e50" },
      },
    },
    {
      type: "vue.js",
      level: 70,
      color: {
        bar: "#5a68a5",
        title: { text: "#fff", background: "#2c3e50" },
      },
    },
  ];

  return (
    <>
      <div className={styles.SkilsContainer}>
        <div className={styles.Textbox}>
          <h2>SKills</h2>
          <p></p>
          <span></span>
        </div>
        <div className={styles.barContainer}>
          <div className={styles.leftBox}>
            <SkillBar skills={skills} />
          </div>
          <div className={styles.rightBox}>
            <SkillBar skills={skills2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
