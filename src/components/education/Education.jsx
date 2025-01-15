import React from 'react'
import styles from './Education.module.css'
import Container from '../../components/container/Container.jsx'
import { FaGraduationCap } from "react-icons/fa";
import samratCollege from '/images/samrat-prithviraj.avif'
import godwinSchool from '/images/godwin-school.jpg'

const Education = () => {
  return (
   <>
    <div id='education' className={styles.educationSection}>
      <Container>
        <div>
          <h1><FaGraduationCap />My Education</h1>
          <p className={styles.headingText}>Education is not the learning of facts, but the training of the mind to think.</p>
          <div className={styles.educations}>
            <div className={styles.educationBox}>
              <div className={styles.educationImage}>
                <img src={samratCollege} alt="" />
              </div>
              <div className={styles.educationData}>
                <h2>Bachelor in Computer Application </h2>
                <p>Samrat Prithviraj Chauhan Degree college | Baghpat</p>
                <h3>2023-2026 | Pursuing</h3>
              </div>
            </div>
            <div className={styles.educationBox}>
              <div className={styles.educationImage}>
              <img src={godwinSchool} alt="" />
              </div>
              <div className={styles.educationData}>
                <h2>12th With PCM</h2>
                <p>Godwin Public School | Baraut</p>
                <h3>2022-2023 | Completed</h3>
              </div>
            </div>
            <div className={styles.educationBox}>
              <div className={styles.educationImage}>
              <img src={godwinSchool} alt="" />
              </div>
              <div className={styles.educationData}>
                <h2>10th With Science</h2>
                <p>Godwin Public School | Baraut</p>
                <h3>2020-2021 | Completed</h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
   </>
  )
}

export default Education