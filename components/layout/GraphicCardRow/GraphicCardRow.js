import styles from "./GraphicCardRow.module.css";

function GraphicCardRow({ children }) {
  return <div className={styles["card-row"]}>{children}</div>;
}

export default GraphicCardRow;
