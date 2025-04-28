import React from "react";
import styles from "./CovidStatus.module.css";

function CovidStatus({ data }) {
  // Karena data sekarang langsung array
  const positif = data.find((item) => item.status === "Positif");
  const sembuh = data.find((item) => item.status === "Sembuh");
  const meninggal = data.find((item) => item.status === "Meninggal");

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Indonesia</h2>
      <p className={styles.subtitle}>Data Covid Berdasarkan Indonesia</p>
      <div className={styles.card}>
        <div className={styles.status}>
          <h3 className={styles.status__title}>Confirmed</h3>
          <p className={styles.confirmed}>
            {positif ? positif.total : "Data not available"}
          </p>
        </div>
        <div className={styles.status}>
          <h3 className={styles.status__title}>Recovered</h3>
          <p className={styles.recovered}>
            {sembuh ? sembuh.total : "Data not available"}
          </p>
        </div>
        <div className={styles.status}>
          <h3 className={styles.status__title}>Death</h3>
          <p className={styles.death}>
            {meninggal ? meninggal.total : "Data not available"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CovidStatus;
