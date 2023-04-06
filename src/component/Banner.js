import React from "react";
import BannerContainer from "../UI/BannerContainer";
import styles from "../css/Banner.module.css";
import circle from "../img/circle.png";
import { FaGithub } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";


const Header = () => {
  return (
    <>
      <BannerContainer>
        <div className={styles.bannerWrap}>
          <div className={styles.circleOne}>
            <img src={circle} alt="" />
          </div>
          <div class={styles.innerWrap}>
            <div className={styles.bannerText}>
              <div className={styles.bannerName}>
                <h2>
                  <span>YoungBeom Lee</span>
                </h2>
              </div>
              <p className={styles.bannerDesc}>
                <span>신입 프론트엔드개발자 이영범입니다.</span>
              </p>
              <h4>
                "Specialized in" &nbsp;
                <span className={styles.typeCss}>코드톱니바퀴 이영범입니다.</span>
              </h4>
              <ul className={styles.iconList}>
                <li>
                  <a href="https://github.com/YoungBeomLee">
                    <FaGithub className={styles.faGithub} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGithub className={styles.faGithub} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGithub className={styles.faGithub} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGithub className={styles.faGithub} />
                  </a>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </BannerContainer>
    </>
  );
};

export default Header;
