import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../../firebase/Firebase";
import styles from "./Test.module.css";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    url: "",
    skill: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add document to Firestore
      await addDoc(collection(firestore, "Skills"), formData);
      alert("Form submitted successfully!");
      setFormData({ url: "", skill: "", category: "" }); // Reset form
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error submitting the form. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.heading}>Submit Your Details</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Image URL Field */}
          <div className={styles.formGroup}>
            <label htmlFor="url" className={styles.label}>
              Image URL:
            </label>
            <input
              type="url"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="Enter image URL"
              className={styles.input}
            />
          </div>

          {/* Skill Field */}
          <div className={styles.formGroup}>
            <label htmlFor="skill" className={styles.label}>
              Skill:
            </label>
            <input
              type="text"
              id="skill"
              name="skill"
              value={formData.skill}
              onChange={handleChange}
              placeholder="Enter your skill"
              className={styles.input}
            />
          </div>

          {/* Category Field */}
          <div className={styles.formGroup}>
            <label htmlFor="category" className={styles.label}>
              Category:
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter category"
              className={styles.input}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
