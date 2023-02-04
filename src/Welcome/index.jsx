import styles from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <section className={styles.welcome}>
      <div className={"container"}>
        <div className={styles["welcome__description"]}>
          <p className={styles["welcome__text"]}>
            Zajmujemy się produkcja balustrad, barierek, schodów, bram
            wjazdowych schodów oraz mebli stal
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
