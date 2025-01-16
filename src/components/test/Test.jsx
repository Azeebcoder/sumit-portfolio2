import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image file.");
      return;
    }

    try {
      // Create form data for the image upload
      const formData = new FormData();
      formData.append("image", file);

      // Upload the image to ImgBB
      const res = await axios.post(
        "https://api.imgbb.com/1/upload?key=33e2e65a31c354c56956fb73fc5434ac", // Replace with your API key
        formData
      );

      const imageUrl = res.data.data.url; // Get the image URL from ImgBB response

      // Log project data (you can save it to Firestore or a JSON file)
      const projectData = { name, description, link, imageUrl };
      console.log("Project uploaded:", projectData);
      console.log("URl:", projectData.imageUrl);

      alert("Project uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload project.");
    }
  };

  return (
    <div>
      <h1 >Upload Project</h1>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload Project</button>
    </div>
  );
};

export default Test;
