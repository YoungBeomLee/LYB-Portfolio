import { useEffect, useRef } from "react";
import BannerContainer from "../UI/BannerContainer";
import styles from "../css/Aboutme.module.css";
import person from "../img/person.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);
const Aboutme = () => {
  const ImageRef = useRef(null);
  const h2Ref = useRef(null);
  const h6Ref = useRef(null);
  const aRef = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    gsap.to(pRef.current, {
      y: -30,
      duration: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: pRef.current,
        start: "bottom center",
        end: "+=300",
      },
    });
    gsap.to(aRef.current, {
      y: -30,
      duration: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: aRef.current,
         
        end: "+=300",
      },
    });
    gsap.to(h6Ref.current, {
      y: -30,
      duration: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: h6Ref.current,
        start: "bottom center",
        end: "+=300",
      },
    });
    gsap.to(h2Ref.current, {
      y: -30,
      duration: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: h2Ref.current,
        start: "bottom center",
        end: "+=300",
      },
    });
    gsap.to(ImageRef.current, {
      x: -200,
      duration: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: ImageRef.current,
        start: "right center",
        end: "+=300",
      },
    });
  }, []);

  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.inner}>
          <div className={styles.row}>
            <div className={styles.leftBox}>
              <div className={styles.aboutContent}>
                <h2 ref={h2Ref}>About me</h2>
                <h6 ref={h6Ref}>
                  비쥬얼 디자이너 & 프론트엔드 개발자 <b style={{ color: "#000", fontWeight: 700, fontSize: 20 }}>이영범</b>입니다.
                </h6>
                <p ref={pRef}>
                  -피그마, 깃허브, VSCode, React를 중심으로 다양한 프로젝트를 만들어봤습니다. -반응형 웹 디자인을 고려하여 사용자 경험을 중요하게 여기며, 사용자 중심의 디자인과 개발을 추구합니다.
                  <br />
                  -저는 피그마를 사용하여 사용자 인터페이스(UI) 및 사용자 경험(UX) 디자인을 작업하고, 디자인 시안을 제작하며, 효과적인 디자인 프로세스를 구축하는데 능숙합니다.또한, 깃허브를 활용하여 버전 관리와 협업을 효율적으로 관리하며, 웹 개발 프로젝트를 원활하게 진행합니다.
                  <br /> -VSCode를 활용하여 코드 작성 및 디버깅을 수행하며, 개발 생산성을 극대화합니다. React를 사용하여 eact 컴포넌트를 활용하여 모듈화된 코드를 작성하고, 상태 관리와 라우팅을 효과적으로 구현합니다. React의 생태계를 잘 활용하여 풍부한 사용자 경험을 제공하는데 주력하고 있습니다.
                </p>
                <a href="#" ref={aRef} className={styles.ContactBtn}>
                  Contact me
                </a>
                <a href="#"  ref={aRef} className={styles.downBtn}>
                  이력서 다운로드
                </a>
              </div>
            </div>
            <div className={styles.rightBox}>
              <div className={styles.aboutImg}>
                <img src={person} className="personImg" alt="#" ref={ImageRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
