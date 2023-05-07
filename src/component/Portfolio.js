import { useEffect, useRef } from "react";
import "../css/Portfolio.css";
import styles from "../css/Portfolio.module.css";
import { Navigation, Pagination, Scrollbar, A11y, Zoom, Autoplay } from "swiper";
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
import qrcode from "../img/4nitureqr.png";
import reactNative from "../img/reactNative.gif";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import "aos/dist/aos.css";

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
      keyword: "#HTML #CSS #Jquery",
      imgUrl: project1,
      title: "한국가스공사 리뉴얼페이지",
      content: "한국가스공사 홈페이지 리뉴얼작업",
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
      keyword: "#HTML #CSS #Jquery #PHP",
      imgUrl: project1,
      title: "한국가스공사 리뉴얼페이지(php)",
      content: "한국가스공사 홈페이지 PHP 게시판 기능추가 리뉴얼작업",
      date: "2022.12.16~2023.01.12 (3주)",
      contribution: "100%",
      skill: "HTML, CSS, JS, Jquery,php게시판, 캐시로그인, 캐로셀,php",
      tech: "vscode,github,Figma",
      deploy: "GitHub, Dothome",
      page: "메인1, 게시판1, 로그인1",
      link: "http://edlee127.dothome.co.kr/project1/index.php",
      link2: "https://github.com/YoungBeomLee/Project1-PHP",
    },
    {
      keyword: "#BootStrap #SCSS #API",
      imgUrl: ticatalk,
      member: 4,
      title: "tikcatalk",
      content: "팀프로젝트1. 티켓톡",
      date: "2023.2.6~2023.02.22 (2주)",
      contribution: "25%, 팀원:5명",
      skill: "HTML, CSS, JS, Jquery, bootstrap, Scss,캐시로그인, 부트스트랩, api",
      tech: "vscode,github,Figma",
      deploy: "GitHub",
      page: "메인1, 서브페이지1, 로그인1",
      link: "https://youngbeomlee.github.io/teamproject_ticatalk",
      link2: "https://github.com/YoungBeomLee/teamproject_ticatalk",
    },
    {
      keyword: "#React #SQL #Node.js #sequlize",
      imgUrl: fourniture,
      member: 4,
      title: "4niture",
      content: "팀프로젝트2. 가구쇼핑몰",
      date: "2023.03.15~2023.04.04 (3주)",
      contribution: "25% 팀원:4명",
      skill: "React, CSSmodule, antd, node.js,리액트, sequlize, 서버구현, sqllite",
      tech: "vscode,github,Figma",
      deploy: "Vercell, CloudType",
      page: "메인1, 상세상품게시판4, 검색페이지1, 상품업로드1, 리뷰업로드1, 리뷰페이지1",
      link: "https://4niture-react-front-dkr64oruw-youngbeomlee.vercel.app/",
      link2: "https://github.com/YoungBeomLee/4niture-react-front",
    },
  ];

  let slideobj2 = [
    {
      keyword: "#React-Native #Android Studio",
      imgUrl: reactNative,
      title: "react-native-4niture",
      content: "개인프로젝트 리액트네이티브. 가구쇼핑몰",
      date: "2023.03.15~2023.04.12 (3주)",
      contribution: "100%",
      skill: "React-native-expo,carousel,Update 기능,axios,구매 후 품절 기능",
      tech: "vscode,github,Figma",
      deploy: "Vercell, CloudType",
      page: "메인페이지,상품페이지,리뷰페이지",
      qr: qrcode,
      link: "https://4niture-react-front-dkr64oruw-youngbeomlee.vercel.app/",
      link2: "https://github.com/YoungBeomLee/react-native-project",
    },
  ];
  return (
    <>
      <div className={styles.Container} id="Portfolio">
        <div className={styles.portfolioTitle}>
          <h2 data-aos="fade-up" data-aos-duration="1500">
            Portfolio
          </h2>
          <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
            저의 포트폴리오 작업물입니다.
          </p>
          <span></span>
        </div>
        <Swiper
          className={styles.Swiper}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Zoom, Autoplay]}
          spaceBetween={100}
          slidesPerView={1}
          navigation
          speed={500}
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          // onSlideChange={() => console.log("slide change")}
          loop
          zoom={true}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
        >
          {slideobj.map((item, idx) => {
            return (
              <SwiperSlide className={styles.SwiperSlide}>
                <div className={styles.PortfolioContainer}>
                  <div className={styles.PortfolioInner}>
                    <div className={styles.portfolioLeftbox} data-aos="fade-right" data-aos-duration="1500">
                      <div className={styles.portfolioImgbox}>
                        <img src={item.imgUrl} alt={item.imgUrl} />
                      </div>
                    </div>
                    <div className={styles.portfolioRightbox} data-aos="fade-left" data-aos-duration="1500">
                      <div className={styles.portfolioTitlebox}>
                        <h2>
                          <span>0{idx + 1}</span>
                          <span>{item.title}</span>
                        </h2>
                      </div>
                      <div className={styles.portfolioKeyword}>{item.keyword}</div>
                      <div className={styles.portfolioTextbox}>
                        <ul className={styles.PortfolioTextul}>
                          <li>내용: {item.content}</li>
                          <li>기간: {item.date}</li>
                          <li>기여도: {item.contribution}</li>
                          <li>스킬: {item.skill}</li>
                          <li>사용프로그램: {item.tech}</li>
                          <li>배포: {item.deploy}</li>
                          <li>페이지: {item.page}</li>
                        </ul>
                      </div>

                      <ul className={styles.linkUl}>
                        <li>
                          <a href={item.link} ref={a1Ref} className={styles.LinkBtn}>
                            사이트보기
                          </a>
                        </li>
                        <li>
                          <a href={item.link2} ref={a2Ref} className={styles.LinkBtn2}>
                            깃허브보기
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          {slideobj2.map((item, idx) => {
            return (
              <SwiperSlide className={styles.SwiperSlide}>
                <div className={styles.PortfolioContainer}>
                  <div className={styles.PortfolioInner}>
                    <div className={styles.portfolioLeftbox} data-aos="fade-right" data-aos-duration="1500">
                      <div className={[styles.portfolioImgbox, styles.Frame].join(" ")}>
                        <img src={item.imgUrl} alt={item.imgUrl} className={styles.imgGif} />
                      </div>
                    </div>
                    <div className={styles.portfolioRightbox} data-aos="fade-left" data-aos-duration="1500">
                      <div className={styles.portfolioTitlebox}>
                        <h2>
                          <span>0{idx + 5}</span>
                          <span>{item.title}</span>
                        </h2>
                      </div>
                      <div className={styles.portfolioKeyword}>{item.keyword}</div>
                      <div className={styles.portfolioTextbox}>
                        <ul className={styles.PortfolioTextul}>
                          <li>내용: {item.content}</li>
                          <li>기간: {item.date}</li>
                          <li>기여도: {item.contribution}</li>
                          <li>스킬: {item.skill}</li>
                          <li>사용프로그램: {item.tech}</li>
                          <li>배포: {item.deploy}</li>
                          <li>페이지: {item.page}</li>
                        </ul>
                      </div>
                      <ul className={styles.linkUl2}>
                        <li style={{ display: "flex", flexDirection: "column" }}>
                          <img className={styles.qrCodeImg} src={item.qr} alt="" />
                          <span>qr코드 스캔</span>
                        </li>
                        <li style={{ marginLeft: 50 }}>
                          <a href={item.link2} ref={a2Ref} className={[styles.LinkBtn2, styles.LinkBtn22].join(" ")}>
                            깃허브보기
                          </a>
                        </li>
                      </ul>
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
