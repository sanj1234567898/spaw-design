import React from "react";
import styles from "./Work.module.scss";
//import images
import img1 from "../assets/work1/1.jpg";
import img2 from "../assets/work2/2.jpg";
import img3 from "../assets/work3/3.jpg";
import img4 from "../assets/work4/1.jpg";
import img5 from "../assets/work5/1.jpg";
import img6 from "../assets/work6/1.jpg";
import img7 from "../assets/work7/1.jpg";

import { motion } from "framer-motion";

const workAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
    },
  }),
};

const Work = () => {
  const scrollRef = React.useRef(null);

  return (
    <section className={styles["work"]} id="section1">
      <motion.div
        ref={scrollRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container"
      >
        <h2 className={styles["work__title"]}>Nasze prace</h2>
        <motion.div className={styles["card-container"]}>
          <motion.div
            custom={1}
            whileHover={{ scale: 1.01 }}
            variants={workAnimation}
            className={styles.card}
          >
            <img src={img1} alt="img" />
            <div className={styles.content}>
              <p>
                Przedstawiamy Państwu projekt naszych klientów , zrealizowany
                przez nasz zespół . Pan Piotr wraz z żoną zaprojektowali sobie
                sopelki z balustradą a my zrobiliśmy resztę <span>🙃</span>
                koszyki na doniczki też z naszej ręki <span>🫢</span>
              </p>
            </div>
          </motion.div>
          <motion.div
            custom={2}
            whileHover={{ scale: 1.01 }}
            variants={workAnimation}
            className={styles.card}
          >
            <img src={img2} alt="img" />
            <div className={styles.content}>
              <p>
                Kolejna , ciekawa nasza praca <span>😉</span> Balustrada z
                nietypowym pochwytem z rury stalowej . Ciężkie były te zakręty ,
                ale jak widać na zdjęciu daliśmy radę <span>😉</span>
              </p>
            </div>
          </motion.div>
          <motion.div
            custom={3}
            whileHover={{ scale: 1.01 }}
            variants={workAnimation}
            className={styles.card}
          >
            <img src={img3} alt="img" />
            <div className={styles.content}>
              <p>
                Skrojone na miarę „ Sople „ z balustradą wkomponowały się
                idealnie <span>😃</span>
              </p>
            </div>
          </motion.div>
          <motion.div
            custom={4}
            whileHover={{ scale: 1.01 }}
            variants={workAnimation}
            className={styles.card}
          >
            <img src={img4} alt="img" />
            <div className={styles.content}>
              <p>
                Schody już były , ale brakowało balustrad , a więc zjawiliśmy
                się i efekt widać <span>😃</span>
              </p>
            </div>
          </motion.div>
          <motion.div
            custom={5}
            whileHover={{ scale: 1.01 }}
            variants={workAnimation}
            className={styles.card}
          >
            <img src={img5} alt="img" />
            <div className={styles.content}>
              <p>
                Kolejny klient zadowolony. Jest nam z tego powodu bardzo miło i
                cieszymy się z realizacji jego wizji -pięknej barierki
                wewnętrznej.
              </p>
            </div>
          </motion.div>
          <motion.div
            custom={6}
            whileHover={{ scale: 1.01 }}
            variants={workAnimation}
            className={styles.card}
          >
            <img src={img6} alt="img" />
            <div className={styles.content}>
              <p>
                Przedstawiamy kolejną realizacje barierki ze stali czarnej
                malowanej proszkowo na kolor czarny mat . Wypełnienie z rurek
                ”25” z projektu klienta . Wszyscy zadowoleni z efektu
                przeprowadzonych prac .
              </p>
            </div>
          </motion.div>
          <motion.div
            custom={7}
            whileHover={{ scale: 1.01 }}
            variants={workAnimation}
            className={styles.card}
          >
            <img src={img7} alt="img" />
            <div className={styles.content}>
              <p>
                Idealnie dopasowana balustrada <span>😎</span> Klient zadowolony
                , my również
                <span>🙂</span> Dziękujemy za zaufanie <span>😜</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Work;
