import React from "react";
import { ReactTyped } from "react-typed";
import styles from "./Hero.module.css";
import Container from "../container/Container";
import {
  FaLinkedinIn,
  FaGithub,
  FaPaperPlane,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import myimage from "/images/contact.png";

const Hero = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className={styles.hero} id="home">
        <Container>
          <div className={styles.heroSection}>
            <div className={styles.heroLeft}>
              <h2 className={styles.heroHeading}>
                Hi There, I'm <br />
                <span>Sumit</span> Bhardwaj
              </h2>
              <p className={styles.heroDescription}>
                I am into{" "}
                <ReactTyped
                  strings={[
                    "Software Devlopement",
                    "Web Devlopement",
                    "Programming",
                    "Backend Devlopement",
                    "Cyber Security",
                  ]}
                  typeSpeed={100}
                  backSpeed={30}
                  backDelay={2000}
                  loop
                />
              </p>
              <a
                href="#about"
                className={styles.heroBtn}
                onClick={(e) => {
                  handleScroll(e, "about");
                }}
              >
                About Me <FaArrowRight />
              </a>
              <ul className={styles.heroLinks}>
                <li className={styles.linkedIn}>
                  <a
                    href="https://www.linkedin.com/in/sumit-bhardwaj-new"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className={styles.gitHub}>
                  <a href="https://github.com/Azeebcoder" target="_blank">
                    <FaGithub />
                  </a>
                </li>
                <li className={styles.instagram}>
                  <a href="https://www.instagram.com/lilsumyy/" target="_blank">
                    <FaInstagram />
                  </a>
                </li>
                <li className={styles.twitter}>
                  <a href="https://x.com/LilSuumyy" target="_blank">
                    <FaXTwitter />
                  </a>
                </li>
                <li className={styles.tellygram}>
                  <a href="https://t.me/+916397929579" target="_blank">
                    <FaPaperPlane />
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.heroRight}>
              <img src={myimage} alt="" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
