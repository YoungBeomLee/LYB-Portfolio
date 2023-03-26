import React from "react";
import styles from "./BannerContainer.module.css";

const BannerContainer = (chill) => {
    return <div className={styles.container}>{chill.children}</div>;
  };
  
  export default BannerContainer;
  