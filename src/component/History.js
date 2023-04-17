import {useEffect} from "react";
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
      <Container>
        <div className={styles.TextBox}>
          <h2 data-aos="fade-up" data-aos-duration="1500" >History</h2>
          <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">What I'm Doing</p>
          <span></span>
        </div>
        <div className={styles.CardBox}>
          <div className={styles.Card} data-aos="fade-up" data-aos-duration="1500">
            <h2>인적사항</h2>
            <ul className={styles.CardUl}>
              <li><span>이름:</span><span>이영범</span></li>
              <li><span>생년월일:</span><span>1995.12.07 | 만27세</span></li>
              <li><span>학력:</span><span>2014.03~2021.08 멀티미디어공학과졸업</span></li>
            </ul>
          </div>
          <div className={styles.Card} data-aos="fade-up" data-aos-duration="1500">
            <h2>교육사항</h2>
            <ul className={styles.CardUl}>
              <li>
                웹퍼블리셔과정: <br />
                2021.09~2022.02 그린컴퓨터아카데미
              </li>
              <li>프로젝트기반 프론트엔드 SW개발자과정: 2022.11~2023.05</li>
              <li></li>
            </ul>
          </div>
          <div className={styles.Card} data-aos="fade-up" data-aos-duration="1500">
            <h2>자격사항</h2>
            <ul className={styles.CardUl}>
              <li><span>정보처리기사:</span> <span>2021.06</span></li>
              <li><span>GTQ1급 포토샵:</span><span>2021.12</span></li>
              <li></li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default History;
