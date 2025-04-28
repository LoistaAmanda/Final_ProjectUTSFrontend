import styles from "./Covid.module.css"
import image from "../../assets/image/image1.png"

function Covid(){
    return (
      <div className={styles.container}>
        <section className={styles.covid}>
          <div className={styles.covid__left}>
            <h1 className={styles.covid__title}>Covid ID</h1>
            <h3 className={styles.covid__information}>
              Monitoring Perkembangan Covid
            </h3>
            <p className={styles.covid__description}>
              Website Covid ID merupakan platform resmi yang dibuat pemerintah
              Indonesia untuk memantau dan menyajikan perkembangan terkini
              seputar COVID-19 di Indonesia. Melalui situs ini, masyarakat dapat
              mengakses data terbaru mengenai jumlah kasus, penyebaran,
              informasi kesehatan, serta berbagai kebijakan dan protokol
              penanganan pandemi yang berlaku di tingkat nasional maupun daerah.
              Website ini juga berfungsi sebagai sumber informasi terpercaya
              untuk menghindari hoaks, serta menyediakan layanan edukasi dan
              mentoring bagi masyarakat dan tenaga kesehatan terkait penanganan
              dan pencegahan COVID-19
            </p>
            <button className={styles.covid__button}>Vaccine</button>
          </div>
          <div className={styles.covid__right}>
            <img
              className={styles.covid__image}
              src={image}
              alt="Medical workers with medicine"
            />
          </div>
        </section>
      </div>
    );
}

export default Covid;