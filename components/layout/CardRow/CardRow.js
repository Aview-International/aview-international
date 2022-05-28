import styles from "./CardRow.module.css";

function CardRow({ children }) {
  return <div className={styles["card-row"]}>{children}</div>;
}

export default CardRow;
