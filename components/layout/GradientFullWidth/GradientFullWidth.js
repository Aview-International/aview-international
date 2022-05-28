import styles from "./GradientFullWidth.module.css";

function GradientFullWidth({ children }) {
  return <div className={styles["gradient-container"]}>{children}</div>;
}

export default GradientFullWidth;
