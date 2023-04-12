import { useEffect, useRef } from "react";
import "../css/Portfolio.css";
import styles from "../css/Portfolio.module.css";
import { Navigation, Pagination, Scrollbar, A11y, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import project1 from "../img/project1Full.png";
import fourniture from "../img/4niture.png";
import ticatalk from "../img/ticatalk.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const a1Ref = useRef(null);
  const a2Ref = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: a1Ref.current,
      animation: gsap.to(a1Ref.current, { opacity: 1, y: -30, duration: 1.4, ease: "power2.inOut" }), // ScrollTrigger와 연결할 애니메이션 설정
    });
    ScrollTrigger.create({
      trigger: a2Ref.current,
      animation: gsap.to(a2Ref.current, { opacity: 1, y: -30, duration: 1.4, ease: "power2.inOut" }), // ScrollTrigger와 연결할 애니메이션 설정
    });
    // ScrollTrigger와 연결할 애니메이션 설정
  }, []);

  let slideobj = [
    {
      keyword:"#HTML #CSS #Jquery",
      imgUrl: project1,
      title: "한국가스공사",
      content: "한국가스공사 홈페이지 리뉴얼작업입니다.",
      date: "2022.12.16~2023.01.12 (3주)",
      contribution: "100%",
      skill: "HTML, CSS, JS, Jquery,api",
      tech: "vscode,github,Figma",
      deploy: "GitHub, Dothome",
      page: "메인1",
      link: "https://youngbeomlee.github.io/project1/",
      link2: "https://github.com/YoungBeomLee/project1",
    },
    {
      keyword:"#HTML #CSS #Jquery #PHP",
      imgUrl: project1,
      title: "한국가스공사 리뉴얼페이지",
      content: "한국가스공사 홈페이지 리뉴얼작업입니다.",
      date: "2022.12.16~2023.01.12 (3주)",
      contribution: "100%",
      skill: "HTML, CSS, JS, Jquery,php게시판, 캐시로그인, 캐로셀,php",
      tech: "vscode,github,Figma",
      deploy: "GitHub, Dothome",
      page: "메인1, 게시판1, 로그인1",
      link: "http://edlee127.dothome.co.kr/project1/index.php",
      link2: "https://youngbeomlee.github.io/project1/",
    },
    {
      keyword:"#BootStrap #SCSS #API",
      imgUrl: ticatalk,
      title: "tikcatalk",
      content: "팀프로젝트1. 티켓톡",
      date: "2023.2.6~2023.02.22 (2주)",
      contribution: "60%",
      skill: "HTML, CSS, JS, Jquery, bootstrap, Scss,캐시로그인, 부트스트랩, api",
      tech: "vscode,github,Figma",
      deploy: "GitHub",
      page: "메인1, 서브페이지1, 로그인1",
      link: "https://youngbeomlee.github.io/teamproject_ticatalk",
      link2: "https://github.com/YoungBeomLee/teamproject_ticatalk",
    },
    {
      keyword:"#React #SQL #Node.js #sequlize",
      imgUrl: fourniture,
      title: "4niture",
      content: "팀프로젝트2. 가구쇼핑몰",
      date: "2023.03.15~2023.04.04 (3주)",
      contribution: "70%",
      skill: "React, CSSmodule, antd, node.js,리액트, sequlize, 서버구현, sqllite",
      tech: "vscode,github,Figma",
      deploy: "Vercell, CloudType",
      page: "메인1, 상세상품게시판4, 검색페이지1, 상품업로드1, 리뷰업로드1, 리뷰페이지1",
      link: "https://4niture-react-front-dkr64oruw-youngbeomlee.vercel.app/",
      link2: "https://github.com/YoungBeomLee/4niture-react-front",
    },
    {
      keyword:"#React-Native #Android Studio",
      imgUrl: fourniture,
      title: "react-native-4niture",
      content: "개인프로젝트 리액트네이티브. 가구쇼핑몰",
      date: "2023.03.15~2023.04.12 (3주)",
      contribution: "70%",
      skill: "React, CSSmodule, antd, node.js,리액트, sequlize, 서버구현, sqllite",
      tech: "vscode,github,Figma",
      deploy: "Vercell, CloudType",
      page: "메인1, 상세상품게시판4, 검색페이지1, 상품업로드1, 리뷰업로드1, 리뷰페이지1",
      link: "https://4niture-react-front-dkr64oruw-youngbeomlee.vercel.app/",
      link2: "https://github.com/YoungBeomLee/react-native-project",
    },
  ];
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.portflioTitle}>
          <h2>Portfolio</h2>
          <p>저의 포트폴리오 작업물입니다.</p>
          <span></span>
        </div>
        <Swiper
          className={styles.Swiper}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Zoom]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          speed={200}
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          // onSlideChange={() => console.log("slide change")}
          loop
          zoom={true}
        >
          {slideobj.map((item,idx) => {
            return (
              <SwiperSlide>
                <div className={styles.PortfolioContainer}>
                  <div className={styles.PortfolioInner}>
                    <div className={styles.portfolioLeftbox}>
                      <div className={styles.portfolioImgbox}>
                        <img src={item.imgUrl} alt={item.imgUrl} />
                      </div>
                    </div>
                    <div className={styles.portfolioRightbox}>
                      <div className={styles.portfolioTitlebox}>
                        <h2><span style={{marginRight:50}}>0{idx+1}</span><span>{item.title}</span></h2>
                      </div>
                      <div className={styles.portflioKeyword}>{item.keyword}</div>
                      <div className={styles.portfolioTextbox}>
                        <ul className={styles.PortfolioTextul}>
                          <li>내용: {item.content}</li>
                          <li>기간: {item.date}</li>
                          <li>기여도: {item.contribution}</li>
                          <li>스킬: {item.skill}</li>
                          <li>사용프로그램: {item.tech}</li>
                          <li>배포: {item.deploy}</li>
                          <li>페이지: {item.page}</li>
                          <li>
                            <a href={item.link} ref={a1Ref} className={styles.LinkBtn}>
                              바로가기
                            </a>
                          </li>
                          <li>
                            <a href={item.link2} ref={a2Ref} className={styles.LinkBtn2}>
                              Github
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Portfolio;
