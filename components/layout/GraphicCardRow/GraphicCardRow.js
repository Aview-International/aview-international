import styles from "./GraphicCardRow.module.css";

/**
 * Row of graphic cards on the homepage
 *
 * @prop children: Cards
 */
function GraphicCardRow({ children }) {
  return <div className={styles["card-row"]}>{children}</div>;
}

export default GraphicCardRow;
