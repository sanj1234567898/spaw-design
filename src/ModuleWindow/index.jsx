import { ImCross } from "react-icons/im";
import styles from "./ModuleWindow.module.scss";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "backInOut",
    },
  },
};

const ModuleWindow = ({ handleModuleWindow }) => {
  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className={handleModuleWindow ? styles["module"] : styles["hidden"]}
      >
        <div className={styles["module__inner"]}>
          <div
            className={styles["module__turnOff"]}
            onClick={handleModuleWindow}
          >
            <ImCross />
          </div>
          <div className={styles["module__text"]}>
            <p>
              <span> 📣</span> Zapraszamy <br />
              SPAW-DESIGN <br />
              <span> 📍</span> Gen. Andersa 38 Białystok
              <br />
            </p>
            <div className={styles["module__contact"]}>
              <span> ☎️</span>
              <ul>
                <li>
                  <a
                    href="tel:
            +48730501810"
                  >
                    +48 730 501 810
                  </a>
                </li>
                <li>
                  <a href="mailto:spawdesign@gmail.com">Spawdesign@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ModuleWindow;
