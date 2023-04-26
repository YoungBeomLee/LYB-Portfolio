import { useEffect } from "react";
import Container from "../UI/Container";
import styles from "../css/History.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
const History = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={styles.HistoryContainer} id="History">
      <div className={styles.TextBox}>
        <h2 data-aos="fade-up" data-aos-duration="1500">
          History
        </h2>
        <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          What I'm Doing
        </p>
        <span></span>
      </div>
      <div className={styles.CardBox}>
        <div className={styles.Card} data-aos="fade-up" data-aos-duration="1500">
          <h2>인적사항</h2>
          <ul className={styles.CardUl}>
            <li>
              <span>이름:</span>
              <span>이영범</span>
            </li>
            <li>
              <span>생년월일:</span>
              <span>1995.12.07 | 만27세</span>
            </li>
            <li>
              <span>연락처:</span>
              <span>010-5561-7692</span>
            </li>
            <li>
              <span>이메일:</span>
              <span>krkr127127@naver.com</span>
            </li>
          </ul>
        </div>
        <div className={styles.Card} data-aos="fade-up" data-aos-duration="1500">
          <h2>교육사항</h2>
          <ul className={styles.CardUl}>
            <li>멀티미디어공학과졸업 <br/>2014.03~2021.08</li>
            <li>
              웹퍼블리셔과정: <br />
              2021.09~2022.02 
            </li>
            <li>프로젝트기반 프론트엔드 SW개발자과정: 2022.11~2023.05</li>
          </ul>
        </div>
        <div className={styles.Card} data-aos="fade-up" data-aos-duration="1500">
          <h2>자격사항</h2>
          <ul className={styles.CardUl}>
            <li>
              <span style={{ fontSize: 20 }}>
                <b>정보처리기사</b>
              </span>
            </li>
            <li>
              <span style={{ fontSize: 20 }}>GTQ1급</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default History;
