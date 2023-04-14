import React from "react";
import styles from "../css/Footer.module.css";
import { CiFacebook,CiTwitter } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Footerlogo from "../img/YBLogo.png"


const Footer = () => {
  return (
    <>
      <div className={styles.FooterContainer}>
        <div className={styles.Inner}>
          <div className={styles.Content}>
            <a href="#"><img src={Footerlogo}  className={styles.logoImg}/></a>
            <ul>
              <li><a href="#"><CiFacebook className={styles.Icon}></CiFacebook></a></li>
              <li><a href="#"><CiTwitter className={styles.Icon}></CiTwitter></a></li>
              <li><a href="#"><FaGoogle  className={styles.Icon}></FaGoogle></a></li>
              <li><a href="#"><AiFillInstagram className={styles.Icon}></AiFillInstagram></a></li>
            </ul>
            <h6>Made with React</h6>
            <p>© 2023 YoungbeomLee - ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
