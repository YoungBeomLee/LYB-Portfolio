import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../css/header.module.css";
import lottieAni2 from "../cube2.json";
import lottie from "lottie-web";



const Header = () => {
  const cube2 = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: cube2.current,
      animationData: lottieAni2,
      loop: true,
      autoplay: true,
    });
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let winSct = window.scrollY;
      const header = document.querySelector("header");
      if (winSct >= 1) {
        header.classList.add(styles.active);
      } else {
        header.classList.remove(styles.active);
      }
    });
  }, []);

  return (
    <header>
      <div className={styles.headerInner}>
        <div className={styles.gnbWrap}>
          <div className={styles.logoWrap}>
            <Link to="/">
              <h1>
                <span ref={cube2} style={{ position: "absolute", top: -15, width: 100, height: 100,overflow:"hidden" }}></span>
              </h1>
            </Link>
          </div>
          <div className={styles.gnbMenu}>
            <ul className={styles.menu}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#Aboutme">About me</a>
              </li>
              <li>
                <a href="#History">History</a>
              </li>
              <li>
                <a href="#Portfolio">PortFolio</a>
              </li>
              <li>
                <a href="#Skils">Skils</a>
              </li>
              <li>
                <a href="#ContactMe">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
