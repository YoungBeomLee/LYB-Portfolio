import styles from "../css/Portfolio.module.css";
import  "../css/Portfolio.css";
import { Navigation, Pagination, Scrollbar, A11y,  Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import project1 from "../img/project1Full.png";

const Portfolio = () => {
  let slideobj = [
    {
      imgUrl: project1,
      title: "한국가스공사 리뉴얼페이지",
      content: "한국가스공사 홈페이지 리뉴얼작업입니다.",
      date: "2022.12.16~2023.01.12 (3주)",
      contribution: "100%",
      skill: "HTML, CSS, JS, Jquery,php게시판, 캐시로그인, 캐로셀",
      tech: "vscode,github,Figma",
      deploy: "GitHub, Dothome",
      page: "메인1, 게시판1, 로그인1",
      link: "http://edlee127.dothome.co.kr/project1/index.php",
    },
    {
      imgUrl: project1,
      title: "tikcatalk",
      content: "팀프로젝트1. 티켓톡",
      date: "2023.2.6~2023.02.22 (2주)",
      contribution: "60%",
      skill: "HTML, CSS, JS, Jquery, bootstrap, Scss,캐시로그인, 부트스트랩, api",
      tech: "vscode,github,Figma",
      deploy: "GitHub",
      page: "메인1, 서브페이지1, 로그인1",
      link: "https://youngbeomlee.github.io/teamproject_ticatalk",
    },
    {
      imgUrl: project1,
      title: "4niture",
      content: "팀프로젝트2. 가구쇼핑몰",
      date: "2023.03.15~2023.04.04 (3주)",
      contribution: "70%",
      skill: "React, CSSmodule, antd, node.js,리액트, sequlize, 서버구현, sqllite",
      tech: "vscode,github,Figma",
      deploy: "Vercell, CloudType",
      page: "메인1, 상세상품게시판4, 검색페이지1, 상품업로드1, 리뷰업로드1, 리뷰페이지1",
      link: "https://4niture-react-front-dkr64oruw-youngbeomlee.vercel.app/",
    },
    {
      imgUrl: project1,
      title: "react-native-4niture",
      content: "개인프로젝트 리액트네이티브. 가구쇼핑몰",
      date: "2023.03.15~2023.04.12 (3주)",
      contribution: "70%",
      skill: "React, CSSmodule, antd, node.js,리액트, sequlize, 서버구현, sqllite",
      tech: "vscode,github,Figma",
      deploy: "Vercell, CloudType",
      page: "메인1, 상세상품게시판4, 검색페이지1, 상품업로드1, 리뷰업로드1, 리뷰페이지1",
      link: "https://4niture-react-front-dkr64oruw-youngbeomlee.vercel.app/",
    },
  ];
  return (
    <>
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
        {slideobj.map((item) => {
          return (
            <SwiperSlide>
              <div className={styles.PortfolioContainer}>
                <div className={styles.PortfolioInner}>
                  <div className={styles.portfolioLeftbox}>
                    <div className={styles.portfolioTitlebox}>
                      <h2>{item.title}</h2>
                    </div>
                    <hr style={{ width: "70%", marginTop: 20 }} />
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
                          링크: <a href={item.link}>{item.link}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.portfolioRightbox}>
                    <div className={styles.portfolioImgbox}>
                        <img src={item.imgUrl} alt={item.imgUrl}/>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Portfolio;
