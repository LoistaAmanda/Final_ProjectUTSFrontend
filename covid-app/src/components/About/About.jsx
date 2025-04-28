import styles from "./About.module.css"
import image from "../../assets/image/image1.png"

function About(){
    return (
      <div className={styles.container}>
        <section className={styles.about}>
          <div className={styles.about__left}>
            <h1 className={styles.about__title}>Covid ID</h1>
            <h3 className={styles.about__information}>
              Monitoring Perkembangan about
            </h3>
            <p className={styles.about__description}>
              Website Covid ID merupakan platform resmi yang dibuat pemerintah
              Indonesia untuk memantau dan menyajikan perkembangan terkini
              seputar Covid-19 di Indonesia. Melalui situs ini, masyarakat dapat
              mengakses data terbaru mengenai jumlah kasus, penyebaran,
              informasi kesehatan, serta berbagai kebijakan dan protokol
              penanganan pandemi yang berlaku di tingkat nasional maupun daerah.
              Website ini juga berfungsi sebagai sumber informasi terpercaya
              untuk menghindari hoaks, serta menyediakan layanan edukasi dan
              mentoring bagi masyarakat dan tenaga kesehatan terkait penanganan
              dan pencegahan Covid-19
            </p>
            <button className={styles.about__button}>Vaccine</button>
          </div>
          <div className={styles.about__right}>
            <img
              className={styles.about__image}
              src={image}
              alt="Medical workers with medicine"
            />
          </div>
        </section>
      </div>
    );
}

export default About;