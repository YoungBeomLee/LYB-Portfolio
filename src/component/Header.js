import React from "react";
import { Link } from "react-router-dom";
import Container from "../UI/Container";
import styles from "../css/header.module.css";
import logoImg from "../img/Logo.png"


const Header = () => {
    return (
      <header>
        <Container>
        <div className={styles.gnbWrap}>
          <div className={styles.logoWrap}>
            <Link to='/'>
              <h1>
                <img src={logoImg} alt='logo' />
              </h1>
            </Link>
            </div>
            <div className={styles.topMenu}>
          
              <ul className={styles.menu}>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/'>About me</Link>
                </li>
                <li>
                  <Link to='/'>PortFolio</Link>
                </li>
                <li>
                  <Link to='/'>Skils</Link>
                </li>
                <li>
                  <Link to='/'>Contact Me</Link>
                </li>
              
              </ul>
          
          </div>
               
        </div>
      
      </Container>
        
        
    </header>

        );
};

export default Header;