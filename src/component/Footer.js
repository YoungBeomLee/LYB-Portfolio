import React from "react";
import styles from "../css/Footer.module.css";
import { CiFacebook,CiTwitter } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <div className={styles.FooterContainer}>
        <div className={styles.Inner}>
          <div className={styles.Content}>
            <a className={styles.logoImg}>dd</a>
            <ul>
              <li><a><CiFacebook className={styles.Icon}></CiFacebook></a></li>
              <li><a><CiTwitter className={styles.Icon}></CiTwitter></a></li>
              <li><a><FaGoogle className={styles.Icon}></FaGoogle></a></li>
              <li><a></a></li>
            </ul>
            <h6></h6>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
