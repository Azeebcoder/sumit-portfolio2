import React, { useRef } from 'react';
import styles from "./Contact.module.css";
import { SlEarphonesAlt } from "react-icons/sl";
import Container from "../container/Container.jsx";
import myimage from "/images/contact.png";
import { AiFillMessage } from "react-icons/ai";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPaperPlane
} from "react-icons/fa";


import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g171318', 'template_16jdque', form.current,'nUZqtTAKG1pV-Vckm')
      .then(
        () => {
          form.current.reset();
          showSuccessToast();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const showSuccessToast = () => {
    toast.success('Form submitted successfully!', {
      position: "top-right", // Top-right position
      autoClose: 5000,       // Auto close after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: `${styles.successToast}`, // Custom CSS class
      progressClassName: `${styles.successProgress}`,
    });
  };

  return (
    <>
     
      <div id="contact" className={styles.contactSection}>
        <Container>
          <div className={styles.contact}>
            <h1>
              <SlEarphonesAlt />
              Get In Touch
            </h1>
            <div className={styles.contactDetail}>
              <div className={styles.contactImage}>
                <img src={myimage} alt="" />
              </div>
              <div className={styles.inputForm}>
                <form action="getdata" className={styles.form} ref={form} onSubmit={sendEmail}>
                  <div className={styles.inputContainer}>
                    <FaUser className={styles.icon} />
                    <input
                    required
                      type="text"
                      name="user_name"
                      id="name"
                      placeholder="Name"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <FaEnvelope className={styles.icon} />
                    <input
                    required
                      type="email"
                      name="user_email"
                      id="email"
                      placeholder="Email"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <FaPhone className={styles.icon} />
                    <input
                    required
                      type="tel"
                      name="user_mobile"
                      id="number"
                      placeholder="Phone"
                      pattern="[0-9]{10}" 
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <AiFillMessage className={`${styles.icon} ${styles.massegeIcon}`} />
                    <textarea
                    required
                      name="message"
                      id="massege"
                      placeholder="Message"
                      rows="5"
                      className={`${styles.input} ${styles.massege}`}
                    ></textarea>
                  </div>
                  <button type="submit" className={styles.submitBtn}>
                    Submit <FaPaperPlane />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
        <div>
      <ToastContainer />
    </div>
      </div>
    </>
  );
};

export default Contact;
