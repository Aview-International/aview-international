import styles from "./Border.module.css";

function Border({ children }) {
  return <div className={styles.border}>{children}</div>;
}

export default Border;
