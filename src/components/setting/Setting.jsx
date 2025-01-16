import React, { useEffect, useRef } from "react";
import { useTheme } from "../../contaxt/ThemeContext";
import styles from "./Setting.module.css";
import { IoClose } from "react-icons/io5";

const Setting = ({ settingClicked, updateSettingClicked }) => {
  const { theme, toggleTheme } = useTheme();
  const sidebarRef = useRef(null);

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
    </div>
  );
};

export default Setting;
