import React, { useState } from "react";
import axios from "axios";
import { Config } from "../../config/Config";
import styles from "./Addproject.module.css";
import { firestore } from "../../firebase/Firebase";
import { addDoc, collection } from "firebase/firestore";

const UploadProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [view_url, setview_url] = useState("");
  const [category,setcategory] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select an image file.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${Config.imgbbapi}`,
        formData
      );

      const image_url = res.data.data.url;

      await addDoc(collection(firestore, "projects"), {
        name,
        description,
        view_url,
        image_url,
        logo_url : "https://i.ibb.co/hVz4SvX/logo.jpg",
        category,
      });

      setMessage("Project uploaded successfully!");
      setName("");
      setDescription("");
      setview_url("");
      setcategory("")
      setFile(null);
      document.querySelector("input[type='file']").value = "";
    } catch (error) {
      setMessage("Failed to upload project.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upload Project</h1>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Project Name</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Project Link</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter project link"
          value={view_url}
          onChange={(e) => setview_url(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Project Category</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter Project Category"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Project Description</label>
        <textarea
          className={styles.textarea}
          placeholder="Enter project description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className={styles.fileInputWrapper}>
        <label className={styles.fileLabel} htmlFor="file-upload">
          Choose Image
        </label>
        <input
          className={styles.fileInput}
          id="file-upload"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      <button className={styles.button} onClick={handleUpload}>
        Upload Project
      </button>
      {message && (
        <p
          className={
            message.includes("successfully")
              ? styles.successMessage
              : styles.errorMessage
          }
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default UploadProject;
