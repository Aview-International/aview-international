import styles from './DottedBorder.module.css';

/**
 * DottedBorder Component
 *
 * @prop children - Children to be rendered inside the border
 * @prop borderRadius: Radius of the border, defaults to 15px
 *
 * @author Victor Ogunjobi
 *
 */
const DottedBorder = ({ children, borderRadius }) => {
  return (
    <div
      className={`${styles.DottedBorder}`}
      style={{
        borderRadius: borderRadius,
      }}
    >
      {children}
    </div>
  );
};

export default DottedBorder;
