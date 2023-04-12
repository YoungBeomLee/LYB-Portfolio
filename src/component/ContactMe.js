import React from "react";
import styles from "../css/ContactMe.module.css";
import { AiOutlineEdit, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const ContactMe = () => {
  return (
    <>
      <div className={styles.ContactMeContainer}>
        <div className={styles.Inner}>
          <div className={styles.ContactInfoWrap}>
            <h4 className={styles.ContactInfo}>Contact Info</h4>

            <ul className={styles.nav}>
              <li>
                <AiOutlineEdit></AiOutlineEdit>
                <p>이름: <span>이영범</span></p>
              </li>
              <li>
                <HiLocationMarker></HiLocationMarker>
                <p>주소: <span>경기도 성남시</span></p>
              </li>
              <li>
                <AiOutlinePhone></AiOutlinePhone>
                <p>전화번호: <span>010-5561-7692</span></p>
              </li>
              <li>
                <AiOutlineMail></AiOutlineMail>
                <p>이메일: <span>krkr127127@naver.com</span></p>
              </li>
              <li>
                <FaGithub></FaGithub>
                <p>
                  깃허브주소: <span><a href="https://github.com/YoungBeomLee">https://github.com/YoungBeomLee</a></span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
