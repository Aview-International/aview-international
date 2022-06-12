import styles from './Row2.module.css';

/**
 * Row of 2 elements
 *
 * @prop children: Elements inside row
 *
 * @author Andrew Qiao
 */
function Row2({ children }) {
  return <div className={styles.row}>{children}</div>;
}

export default Row2;
