import styles from './Row3.module.css';

/**
 * Row of 3 elements
 *
 * @prop children: Elements inside row
 *
 * @author Andrew Qiao
 */
function Row3({ children }) {
  return <div className={styles.row}>{children}</div>;
}

export default Row3;
