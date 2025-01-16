import React, { useEffect, useRef,useState } from "react";
import { useTheme } from "../../contaxt/ThemeContext";
import styles from "./Setting.module.css";
import { IoClose } from "react-icons/io5";
import { Config } from "../../config/Config";

const Setting = ({ settingClicked, updateSettingClicked }) => {
  const userMode = localStorage.getItem("usermode");
  const [user,setUser] = useState("User");
  


  const { theme, toggleTheme } = useTheme();
  const sidebarRef = useRef(null);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [password, setPassword] = useState("");
  const inputRef = useRef(null);

  // Open the dialog and focus the input
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  // Close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
    setPassword(""); // Reset the password field
  };

  const exitAdmin = () => {
    localStorage.removeItem('usermode');
    setUser("User");
  }

  // Handle password submission
  const handleSubmit = () => {
    if(password === Config.password){
      localStorage.setItem("usermode","Admin");
      setUser("Admin");
    }else{
      alert("Wrong Password")
    }
    closeDialog(); // Close the dialog after submission
  };

  useEffect(()=>{
    userMode?setUser("Admin"):null;
  },[])

  // Focus the input when the dialog opens
  useEffect(() => {
    if (isDialogOpen) {
      inputRef.current?.focus();
    }
  }, [isDialogOpen]);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        updateSettingClicked(false); // Close sidebar
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [updateSettingClicked]);

  return (
    <>
    {isDialogOpen && (
        <div className={styles.dialogOverlay}>
          <div className={styles.dialog}>
            <h3 className={styles.dialogTitle}>Enter Password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
              placeholder="Enter your password"
              ref={inputRef} // Attach the ref to the input
            />
            <div className={styles.buttonGroup}>
              <button onClick={handleSubmit} className={styles.submitButton}>
                Submit
              </button>
              <button onClick={closeDialog} className={styles.cancelButton}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}


      <div
      className={
        settingClicked
          ? `${styles.setting} ${styles.active}`
          : `${styles.setting}`
      }
      ref={sidebarRef}
    >
      <ul className={styles.settingList}>
        <li className={styles.closeIcon}>
          <button onClick={()=>updateSettingClicked(!settingClicked)}>
          <IoClose />
          </button>
        </li>
        <li className={styles.toggler}>
          <h4>Theme</h4>
          <hr />
          <div className={styles.themeIcons}>
            Dark
            <div className={styles.themeToggler}>
              <input
                type="checkbox"
                id="theme-toggle"
                checked={theme === "light"}
                onChange={toggleTheme}
              />
              <label htmlFor="theme-toggle" className={styles.toggleLabel}>
                <span className={styles.toggleCircle}></span>
              </label>
            </div>
            Light
          </div>
          <hr />
        </li>
      </ul>
      <div className={styles.loginUser}>
        <h3>{user}</h3>
        <button className={user==="Admin"? `${styles.redBtn}`:""} onClick={()=>{
          if(user==="User"){
            openDialog();
          }else{
            exitAdmin();
          }
        updateSettingClicked(false)
        }}>{user==="User"?<>Enter Admin Mode</>:<>Exit Admin Mode</>}</button>
      </div>
    </div>
    </>
  );
};

export default Setting;
