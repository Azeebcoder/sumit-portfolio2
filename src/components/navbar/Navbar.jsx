import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Container from "../container/Container.jsx";
import { IoMenu } from "react-icons/io5";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { useTheme } from "../../contaxt/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [clicked, updateClicked] = useState(false);
  const handleToggle = () => updateClicked(!clicked);
  const closeNavbar = (e,id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if(section){
      section.scrollIntoView({behavior: "smooth"})
    }
    updateClicked(false);
  };

  useEffect(() => {
    if (clicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [clicked]);

  return (
    <>
      <div className={styles.navbar}>
        <Container>
          <div className={styles.navbarElements}>
            <ul className={styles.leftNav}>Logo</ul>
            <ul
              className={
                clicked ? `${styles.rightNav} ${styles.show}` : styles.rightNav
              }
            >
              <li>
                <a href="#home" onClick={(e)=>closeNavbar(e,"home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e)=>closeNavbar(e,"about")}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={(e)=>closeNavbar(e,"skills")}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#education" onClick={(e)=>closeNavbar(e,"education")}>
                  Education
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e)=>closeNavbar(e,"projects")}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e)=>closeNavbar(e,"contact")}>
                  Contact
                </a>
              </li>
              <li className={styles.toggler}>
                <div className={styles.themeToggler}>
                  <input
                    type="checkbox"
                    id="theme-toggle"
                    onClick={() => {
                      toggleTheme();
                    }}
                  />
                  <label htmlFor="theme-toggle" className={styles.toggleLabel}>
                    <span className={styles.toggleCircle}></span>
                  </label>
                </div>
              </li>
            </ul>
            <div className={styles.menu} onClick={handleToggle}>
              {clicked ? <AiOutlineFullscreenExit /> : <IoMenu />}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
