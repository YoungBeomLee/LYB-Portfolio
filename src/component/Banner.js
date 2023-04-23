import { useLayoutEffect, useRef, useEffect, useState } from "react";
import BannerContainer from "../UI/BannerContainer";
import styles from "../css/Banner.module.css";
import circle from "../img/circle.png";
import { FaGithub } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { AiFillSetting } from "react-icons/ai";
import profile from "../img/profile3.png";

gsap.registerPlugin(ScrollTrigger, TextPlugin);
const Banner = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);
  const [typeItem, setTypeItem] = useState(() => {});

  useEffect(() => {
    const first = firstRef.current;
    const second = secondRef.current;
    const third = thirdRef.current;
    const fourth = fourthRef.current;

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(first, { duration: 5.5, text: "이번 네트워크는 영범포트입니다.  ", delimiter: " ", split: "chars", ease: "Linear.easeNone", opacity: 1 })
      .to(first, { duration: 0.1, opacity: 0, text: "" })
      .to(second, { duration: 5.5, text: "내리실 문은 프론트입니다.", split: "chars", ease: "Linear.easeNone" })
      .to(second, { duration: 0.1, opacity: 0, text: "" })
      .to(third, { duration: 5.5, text: "This Network is Youngbeom Port Station. ", split: "chars", ease: "Linear.easeNone" })
      .to(third, { duration: 0.1, opacity: 0, text: "" })
      .to(fourth, { duration: 5.5, text: " The doors are on  Frontfolio. ", split: "chars", ease: "Linear.easeNone" })
      .to(fourth, { duration: 0.1, opacity: 0, text: "" });
  }, []);

  return (
    <>
      <BannerContainer>
        <div className={styles.bannerWrap}>
          <div className={styles.circleOne}>
            <img src={circle} alt="" />
          </div>
          <div className={styles.innerWrap}>
            <div className={styles.BannerLeftbox}>
              <div className={styles.bannerText}>
                <div className={styles.bannerName}>
                  <h2>
                    <span>YoungBeom's</span>
                    <br />
                    <span>Portfolio</span>
                  </h2>
                </div>
                <p className={styles.bannerDesc}>
                  <span>신입 프론트엔드개발자 이영범입니다.</span>
                </p>
                <h4>
                  "영범포트" &nbsp;
                  <AiFillSetting className={styles.setting}></AiFillSetting>
                </h4>
                <h4 className={styles.aniBox}>
                  <span className={styles.typeCss} ref={firstRef}></span>
                  <span className={styles.typeCss2} ref={secondRef}></span>
                  <span className={styles.typeCss2} ref={thirdRef}></span>
                  <span className={styles.typeCss2} ref={fourthRef}></span>
                </h4>
                <ul className={styles.iconList}>
                  <li>
                    <a href="https://github.com/YoungBeomLee">
                      <span>깃허브</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/file/d/1MJNzQHmmmexutftu08vzJ0tjrrlnxdpt/view?usp=sharing">
                      <span>이력서</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.ImageBox}>
              <img src={profile} />
            </div>
          </div>
        </div>
      </BannerContainer>
    </>
  );
};

export default Banner;
