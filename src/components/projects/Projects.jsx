import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import Container from "../container/Container.jsx";
import { FaLaptopCode } from "react-icons/fa";
import { firestore } from "../../firebase/Firebase.jsx";
import { collection, getDocs } from "firebase/firestore";

const Projects = () => {

  const [projects, setProjects] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const querySnapshot = await getDocs(collection(firestore, "projects")); // e.g., "users"
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        setProjects(items);
      };
      fetchData();
    }, []);

  // const [selectedFilter, setSelectedFilter] = useState([]);
  // const [filteredItems, setFilteredItems] = useState(projects); // Assuming projects is defined elsewhere

  // const filters = ['Web Development', 'App Development', 'Frontend', 'Backend'];

  // const handleFilterButtonClick = (selectedCategory) => {
  //   if (selectedFilter.includes(selectedCategory)) {
  //     const filters = selectedFilter.filter((el) => el !== selectedCategory);
  //     setSelectedFilter(filters);
  //   } else {
  //     setSelectedFilter([...selectedFilter, selectedCategory]);
  //   }
  // };

  // const filterItems = () => {
  //   if (selectedFilter.length > 0) {
  //     // Filter projects that match any selected category
  //     const tempItems = projects.filter((item) =>
  //       selectedFilter.some((category) => item.category.includes(category))
  //     );
  //     setFilteredItems(tempItems);
  //   } else {
  //     setFilteredItems([...projects]);
  //   }
  // };

  // useEffect(() => {
  //   filterItems();
  // }, [selectedFilter]);

  return (
    <>
      <div  id="projects" className={styles.projectSection}>
        <Container>
          <div className={styles.project}>
            <h1><FaLaptopCode />Projects Made</h1>
            {/* <div className={styles.catogeries}>
              {filters.map((category,index) => (
                <button
                  onClick={()=>{handleFilterButtonClick(category)}}
                  className={selectedFilter?.includes(category)? styles.activeCatogrie:""}
                  key={`fillter-${index}`}
                >{category}</button>
              ))}
            </div> */}
            <div className={styles.projects}>
              {projects.map((project,index)=>(
                <div key={`Projects-${index}`} className={index%2==0?`${styles.first} ${styles.hero}`:`${styles.second} ${styles.hero}`}>
                <img src={project.image_url} alt="Project image" className={styles.image}/>
                <div className={styles.text}></div>
                <div className={styles.logo}>
                  <img src={project.logo_url} alt="Project Logo" />
                </div>
                <div className={styles.mainText}>
                  <p>
                    {project.description}
                  </p>
                </div>
                <div className={styles.projectName}>
                  <p>{project.name}</p>
                </div>
                <div className={styles.heroBtn}>
                  <a href={project.view_url} target="_blank">View</a>
                </div>
              </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Projects;
