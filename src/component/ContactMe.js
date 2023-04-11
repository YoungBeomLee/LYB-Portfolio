import React from "react";
import styles from "../css/ContactMe.module.css";
import { HiLocationMarker,MdDriveFileRenameOutline,MdEmail,AiFillPhone } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const ContactMe = () => {
  return (
    <>
      <div className={styles.ContactMeContainer}>
        <div className={styles.Inner}>
          <div className={styles.ContactInfoWrap}>
            <div className={styles.ContactInfo}>
              <h4>Contact Info</h4>
            </div>
            <ul className={styles.nav}>
              <li>
                <MdDriveFileRenameOutline></MdDriveFileRenameOutline>
                <p>이름: 이영범</p>
              </li>
              <li>
                <HiLocationMarker></HiLocationMarker>
                <p>주소: 경기도 성남시</p>
              </li>
              <li>
                <AiFillPhone></AiFillPhone>
                <p>전화번호 :010-5561-7692</p>
              </li>
              <li>
                <MdEmail></MdEmail>
                <p>이메일: krkr127127@naver.com</p>
              </li>
              <li>
                <FaGithub></FaGithub>
                <p>깃허브주소: <a href="https://github.com/YoungBeomLee">https://github.com/YoungBeomLee</a></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
