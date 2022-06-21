import styles from './DottedBorder.module.css';

const DottedBorder = ({ children }) => {
  return <div className={styles.DottedBorder}>{children}</div>;
};

export default DottedBorder;
