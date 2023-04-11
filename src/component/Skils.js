import React from "react";
import SkillBar from "react-skillbars";
import styles from "../css/Skils.module.css"
import "../css/Skils.css";

const Skills = () => {
  const skills = [
    {
      type: "HTML",
      level: 100,
      color: {
        bar: "#3498db",
        title: { text: "#fff", background: "#2980b9" },
      },
    },
    {
      type: "CSS",
      level: 80,
      color: {
        bar: "#4288d0",
        title: { text: "#fff", background: "#124e8c" },
      },
    },
    {
      type: "Javascript",
      level: 70,
      color: {
        bar: "#2c3e50",
        title: { text: "#fff", background: "#2c3e50" },
      },
    },
    {
      type: "Jquery",
      level: 80,
      color: {
        bar: "#5a68a5",
        title: { text: "#fff", background: "#46465e" },
      },
    },
 
  ];
  const skills2=[
    {
      type: "BootStrap",
      level: 75,
      color: {
        bar: "#525252",
        title: { text: "#fff", background: "#333333" },
      },
    },
    {
      type: "React",
      level: 80,
      color: {
        bar: "black",
        title: { text: "#111", background: "#fff" },
      },
    },
    {
      type: "node.js",
      level: 70,
      color: {
        bar: "black",
        title: { text: "#111", background: "#fff" },
      },
    },
    {
      type: "vue.js",
      level: 0,
      color: {
        bar: "#2ecc71",
        title: { text: "#fff", background: "#27ae60" },
      },
    },
  ]

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
