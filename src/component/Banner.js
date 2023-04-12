import { useLayoutEffect, useRef, useEffect } from "react";
import BannerContainer from "../UI/BannerContainer";
import styles from "../css/Banner.module.css";
import circle from "../img/circle.png";
import { FaGithub } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { AiFillSetting } from "react-icons/ai";


gsap.registerPlugin(ScrollTrigger, TextPlugin);
const Banner = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    const first = firstRef.current;
    const second = secondRef.current;

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(first, { duration: 2.5, text: "코딩톱니바퀴 이영범입니다.", delimiter: " ", split: "chars", ease: "Linear.easeNone" })
      .to(first, { duration: 1.7, text: "", split: "", ease: "Linear.easeNone" })
      .to(second, { duration: 2.5, text: "코드와코드를 이어주는", split: "chars", ease: "Linear.easeNone" })
      .to(second, { duration: 1.7, text: "", split: "", ease: "Linear.easeNone" });
  }, []);

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
                  <span>YoungBeomLee's Portfolio</span>
                </h2>
              </div>
              <p className={styles.bannerDesc}>
                <span>신입 프론트엔드개발자 이영범입니다.</span>
              </p>
              <h4>
                "Specialized in" &nbsp;
                <span className={styles.typeCss} ref={firstRef}></span>
                <span className={styles.typeCss2} ref={secondRef}></span>
                <AiFillSetting className={styles.setting}></AiFillSetting>
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

export default Banner;
