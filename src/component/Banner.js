import React from "react";
import BannerContainer from "../UI/BannerContainer";
import styles from "../css/Banner.module.css";


const Header = () => {
  return (
    <>
      
      <BannerContainer>
          <div className={styles.bannerWrap}>
            <div class={styles.innerWrap}>
                <div className={styles.bannerText}>
                    <div className={styles.bannerName}>
                        <h2><span>YoungBeom Lee</span></h2>
                    </div>
                    <p className={styles.bannerDesc}><span>신입 프론트엔드개발자 이영범입니다.</span></p>
                    <a href="#">Read Me</a>
                </div>
                <div className={styles.bannerImgbox}></div>
            </div>
          </div>
      </BannerContainer>
    </>
  );
};

export default Header;
