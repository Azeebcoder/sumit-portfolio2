import React , { useEffect, useState } from 'react'
import { FaLaptopCode } from "react-icons/fa"; 
import Container from '../container/Container'
import styles from './Skills.module.css'
import { firestore } from "../../firebase/Firebase.jsx";
import { collection, getDocs } from "firebase/firestore";

const Skills = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firestore, "Skills")); // e.g., "users"
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setData(items);
    };
    fetchData();
  }, []);

  
  return (
    <>
      <div id='skills' className={styles.skillSection}>
        <Container>
          <div>
            <h1><FaLaptopCode />Skills & Abilities</h1>
            <div className={styles.skillsList}>
              <ul className={styles.skillsItems}>
              {data.map((skill, index) => (
                  <li key={index} className={styles.skill}>
                    <div className={styles.logoImg}>
                      <img src={skill.url} alt={skill.skill} />
                    </div>
                    <h2>{skill.skill}</h2>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Skills