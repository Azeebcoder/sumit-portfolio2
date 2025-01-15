import React from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import styles from './About.module.css'
import Container from '../container/Container.jsx'
import myimage from '/images/contact.png'

const About = () => {
  return (
    <>
      <div className={styles.aboutSection} id='about'>
        <Container>
          <div className={styles.about}>
            <h1><IoPersonSharp /> About Me</h1>
            <div className={styles.aboutDetails}>
              <div className={styles.aboutImg}>
                <img src={myimage} alt="image" />
              </div>
              <div className={styles.aboutInfo}>
                <div className={styles.aboutName}>
                  <h2>I'M Sumit</h2>
                  <h4>Full Stack Devloper</h4>
                </div>
                <p>I am a Full-Stack developer based in Meerut, India, pursuing BCA at CCSU. Passionate about coding and building applications, I created websites and WebApps using technologies like React, Next.js, and Node.js. I’m focused on improving my skills and enjoy working on advanced projects and full-stack clones.</p>
                <p>
                  <span>Email : </span>sumitbhardwajnew@gmail.com
                </p>
                <p>
                  <span>Place : </span>Baraut, Utter Pradesh
                </p>
                <a href='/Resources/Sumit_resume.pdf' download="Sumit_resume.pdf" className={styles.aboutBtn}>Resume<FaAngleRight /></a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default About