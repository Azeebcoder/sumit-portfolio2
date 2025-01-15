import React from "react";
import styles from "./Footer.module.css";
import Container from "../container/Container.jsx";
import {
  FaLinkedinIn,
  FaGithub,
  FaPaperPlane,
  FaInstagram,FaHome 
} from "react-icons/fa";
import { FaXTwitter, FaCircleChevronRight } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const handleScroll = (e,id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if(section){
      section.scrollIntoView({behavior: "smooth"})
    }
  };
  return (
    <>
      <div className={styles.footerBackground}>
        <Container>
          <div className={styles.footer}>
            <div className={styles.footerItems}>
              <div className={styles.footerRow}>
                <h2>Sumit's Portfolio</h2>
                <p className={styles.footerDescription}>
                  Thank you for visiting my personal portfolio website. Connect
                  with me over socials.
                </p>
                <p className={styles.footerDescription}>Keep Rising 🚀. Connect with me over live chat!</p>
              </div>
              <div className={styles.footerRow}>
                <h2>Quick Links</h2>
                <ul className={styles.quickLinks}>
                <li>
                <a href="#home" onClick={(e)=>handleScroll(e,"home")}>
                  <FaCircleChevronRight/>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e)=>handleScroll(e,"about")}>
                  <FaCircleChevronRight/>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={(e)=>handleScroll(e,"skills")}>
                  <FaCircleChevronRight/>
                  Skills
                </a>
              </li>
              <li>
                <a href="#education" onClick={(e)=>handleScroll(e,"education")}>
                  <FaCircleChevronRight/>
                  Education
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e)=>handleScroll(e,"projects")}>
                  <FaCircleChevronRight/>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e)=>handleScroll(e,"contact")}>
                  <FaCircleChevronRight/>
                  Contact
                </a>
              </li>
                </ul>
              </div>
              <div className={styles.footerRow}>
                <h2>Contact Info</h2>
                <ul className={styles.contactDetails}>
                  <li><a href="tel:+916397929579"><IoIosCall />+91 6397929579</a></li>
                  <li><a href="mailto:sumitbhardwajnew@gmail.com?subject=Hello&body=I would like to Make Projects with you."><MdEmail />sumitbhardwajnew@gmail.com</a></li>
                  <li><a href="https://maps.app.goo.gl/k5ZjjXK8tLLS5jEB7"><FaHome />Baraut, Baghpat</a></li>
                </ul>
                <ul className={styles.contactLinks}>
                  <li>
                    <a href="https://www.linkedin.com/in/sumit-bhardwaj-new" target="_blank"><FaLinkedinIn /></a>
                  </li>
                  <li>
                    <a href="https://github.com/Azeebcoder" target="_blank"><FaGithub /></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/lilsumyy/" target="_blank"><FaInstagram /></a>
                  </li>
                  <li>
                    <a href="https://x.com/LilSuumyy" target="_blank"><FaXTwitter /></a>
                  </li>
                  <li>
                    <a href="https://t.me/+916397929579" target="_blank"><FaPaperPlane /></a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className={styles.credits}>Desgined with 💗 by sumit</div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
