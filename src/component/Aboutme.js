import { useEffect, useRef } from "react";
import styles from "../css/Aboutme.module.css";
import profile from "../img/profile3.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

const Aboutme = () => {
  useEffect(() => {
    AOS.init();
  });
  const ImageRef = useRef(null);
  const h2Ref = useRef(null);
  const h6Ref = useRef(null);
  const a1Ref = useRef(null);
  const a2Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: pRef.current,
      animation: gsap.to(pRef.current, { opacity: 1, y: -30, duration: 1.4, ease: "power2.inOut" }), // ScrollTrigger와 연결할 애니메이션 설정
    });

    ScrollTrigger.create({
      trigger: a1Ref.current,
      animation: gsap.to(a1Ref.current, { opacity: 1, y: -30, duration: 1.4, ease: "power2.inOut" }), // ScrollTrigger와 연결할 애니메이션 설정
    });
    ScrollTrigger.create({
      trigger: a2Ref.current,
      animation: gsap.to(a2Ref.current, { opacity: 1, y: -30, duration: 1.4, ease: "power2.inOut" }), // ScrollTrigger와 연결할 애니메이션 설정
    });
    ScrollTrigger.create({
      trigger: h6Ref.current,
      animation: gsap.to(h6Ref.current, { opacity: 1, y: -30, duration: 1.2, ease: "power2.inOut" }), // ScrollTrigger와 연결할 애니메이션 설정
    });
    ScrollTrigger.create({
      trigger: h2Ref.current,
      animation: gsap.to(h2Ref.current, { opacity: 1, y: -30, duration: 1, ease: "power2.inOut" }), // ScrollTrigger와 연결할 애니메이션 설정
    });
    /*ScrollTrigger.create({
      trigger: ImageRef.current,
      animation: gsap.to(ImageRef.current, { opacity: 1, x: -200, duration: 2, ease: "power2.inOut" }), // ScrollTrigger와 연결할 애니메이션 설정
    });*/
  }, []);
 let alink=[
  {
    name:"연락처",
    url:"https://drive.google.com/file/d/1ikyrdEcwe-IGe5tlQ1G3u-ZM0nrt3aaH/view?usp=sharing",
    class:styles.ContactBtn,
    reff:a1Ref,
  },
  {
    name:"이력서",
    url:"https://drive.google.com/file/d/171vndEIrtLoETfasdiKlhK-r1twiP7HR/view?,usp=sharing",
    class:styles.downBtn,
    reff:a2Ref,
  }
 ]
  return (
    <>
      <div className={styles.aboutContainer} id="Aboutme">
        <div className={styles.inner}>
          <div className={styles.row}>
            <div className={styles.leftBox}>
              <div className={styles.aboutContent}>
                <h2 ref={h2Ref}>About me</h2>
                <h6 ref={h6Ref}>
                  비쥬얼 디자이너 & 프론트엔드 개발자 <b style={{ color: "#000", fontWeight: 700, fontSize: 20 }}>이영범</b>입니다.
                </h6>
                <p ref={pRef}>
                  -Figma, Git, VSCode, React를 중심으로 프로젝트를 만들어봤습니다. 반응형 웹 디자인을 고려하여 사용자 경험을 중요하게 여기며, 사용자 중심의 디자인과 개발을 추구합니다. <br />
                  저는 프론트엔드 개발자로서 다양한 웹 기술을 다룰 수 있는 능력을 가지고 있습니다. HTML5, CSS3, JavaScript, jQuery, Bootstrap, React, Node.js,api등을 활용하여  웹 프로젝트를 개발해왔습니다. 또한, 반응형 웹 디자인에도 높은 이해와 경험이 있어 모바일과 데스크탑에서 최적의 사용자 경험을
                  제공할 수 있습니다. 협업을 중요시하며, 뛰어난 커뮤니케이션 능력과 문제 해결 능력을 갖추고 있습니다. 웹 개발의 최신 트렌드를 지속적으로 공부하며, 사용자 친화적인 인터페이스와 효율적인 웹 애플리케이션을 개발하는 것에 끊임없이 열정을 쏟고 있습니다.
                </p>
                {alink.map((item) => {
                return(
                <>
                <a href={item.url} ref={item.reff} className={item.class}>
                  {item.name}
                </a>
                </>
                );
              })}
              </div>
            </div>
            <div className={styles.rightBox}>
              <div className={styles.aboutImg}>
                <img src={profile} className="personImg" alt="#" data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease-in-out" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
