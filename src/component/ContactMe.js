import React from "react";
import styles from "../css/ContactMe.module.css";
import { AiOutlineEdit, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactMe = () => {
  return (
    <>
      <div className={styles.ContactMeContainer} id="ContactMe" >
        <div className={styles.Inner}>
          <div className={styles.ContactInfoWrap}>
            <h4 className={styles.ContactInfo} data-aos="fade-up" data-aos-duration="1500">Contact Info</h4>

            <ul className={styles.nav}>
              <li>
                <AiOutlineEdit></AiOutlineEdit>
                <p><span>이름:</span> <span>이영범</span></p>
              </li>
              <li>
                <HiLocationMarker></HiLocationMarker>
                <p><span>주소:</span> <span>경기도 성남시</span></p>
              </li>
              <li>
                <AiOutlinePhone></AiOutlinePhone>
                <p><span>전화번호:</span> <span>010-5561-7692</span></p>
              </li>
              <li>
                <AiOutlineMail></AiOutlineMail>
                <p><span>이메일:</span> <span>krkr127127@naver.com</span></p>
              </li>
              <li>
                <FaGithub></FaGithub>
                <p>
                  <span>깃허브주소:</span> <span><a href="https://github.com/YoungBeomLee">https://github.com/YoungBeomLee</a></span>
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
