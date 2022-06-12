import styles from './Row4.module.css';

/**
 * Row of 4 elements
 *
 * @prop children: Elements inside row
 *
 * @author Andrew Qiao
 */
function Row4({ children }) {
  return <div className={styles.row}>{children}</div>;
}

export default Row4;
