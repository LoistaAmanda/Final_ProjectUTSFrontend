import React from "react";
import styles from "./Tabel.module.css";

const TabelProvinsi = ({ data }) => {
  return (
    <div className={styles.tabelContainer}>
      <h1 className={styles.title}>Provinsi</h1>
      <div className={styles.dataCovid}>Data Covid Berdasarkan Provinsi</div>
      <div className={styles.tabelWrapper}>
        <table className={styles.tabelProvinsi}>
          <thead>
            <tr>
              <th className={styles.th}>No</th>
              <th className={styles.th}>Provinsi</th>
              <th className={styles.th}>Positif</th>
              <th className={styles.th}>Sembuh</th>
              <th className={styles.th}>Dirawat</th>
              <th className={styles.th}>Meninggal</th>
            </tr>
          </thead>
          <tbody>
            {data.map((provinsi, index) => (
              <tr key={index}>
                <td className={styles.td}>{index + 1}</td>
                <td className={`${styles.td} ${styles.namaProvinsi}`}>
                  {provinsi.kota}
                </td>
                <td className={styles.td}>{provinsi.kasus}</td>
                <td className={styles.td}>{provinsi.sembuh}</td>
                <td className={styles.td}>{provinsi.dirawat}</td>
                <td className={styles.td}>{provinsi.meninggal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelProvinsi;
