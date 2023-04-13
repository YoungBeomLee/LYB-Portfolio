import React from "react";
import { Link } from "react-router-dom";
import Container from "../UI/Container";
import styles from "../css/header.module.css";
import lottieAni2 from "../cube2.json";
import lottie from "lottie-web";
const Header = () => {
  const cube2 = React.useRef();
  React.useEffect(() => {
    lottie.loadAnimation({
      container: cube2.current,
      animationData: lottieAni2,
      loop: true,
      autoplay: true,
    });
  }, []);

  return (
    <header>
      <Container>
        <div className={styles.gnbWrap}>
          <div className={styles.logoWrap}>
            <Link to="/">
              <h1>
              <span ref={cube2} style={{ position: "absolute", top: 0, width: 100, height: 100 }}></span>
              </h1>
            </Link>
          </div>
          <div className={styles.gnbMenu}>
            <ul className={styles.menu}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About me</Link>
              </li>
              <li>
                <Link to="/">History</Link>
              </li>
              <li>
                <Link to="/">PortFolio</Link>
              </li>
              <li>
                <Link to="/">Skils</Link>
              </li>
              <li>
                <Link to="/">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
