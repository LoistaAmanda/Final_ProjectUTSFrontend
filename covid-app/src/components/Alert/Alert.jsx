import React from "react";
import styles from "./Alert.module.css";

const Alert = ({ children }) => {
  return (
    <div className={styles.alert}>
      <span>{children}</span>
    </div>
  );
};

export default Alert;
