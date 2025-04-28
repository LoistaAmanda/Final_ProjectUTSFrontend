import React, { useState } from "react";
import styles from "./FormCovid.module.css";
import image from "../../assets/image/image2.png";

const FormCovid = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    provinsi: "",
    status: "",
    jumlah: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    // Reset form
    setFormData({
      provinsi: "",
      status: "",
      jumlah: "",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} alt="Form Illustration" className={styles.image} />
      </div>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Form Covid 19</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="provinsi">Provinsi</label>
            <input
              type="text"
              id="provinsi"
              name="provinsi"
              value={formData.provinsi}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="status">Status</label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="jumlah">Jumlah</label>
            <input
              type="number"
              id="jumlah"
              name="jumlah"
              value={formData.jumlah}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormCovid;
