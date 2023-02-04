import React from "react";
import styles from "./Footer.module.scss";
import { ImFacebook2 } from "react-icons/im";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles["footer__inner"]}>
          <div className={styles["footer__social"]}>
            <h2 className={styles["social__title"]}>
              Nasze serwisy społecznościowe
            </h2>
            <ul className={styles["footer__links"]}>
              <li className={styles["footer__link"]}>
                <a
                  href="https://www.facebook.com/profile.php?id=100081589304848"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <ImFacebook2 />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
