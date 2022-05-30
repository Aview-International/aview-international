import styles from "./Border.module.css";

const Border = ({ children }) => {
  return <div className={styles.border}>{children}</div>;
};

export default Border;
