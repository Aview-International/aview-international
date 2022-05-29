import styles from "./Border.module.css";

/**
 * Gradient border
 *
 * @prop borderRadius: Radius of the border, default to 15px
 * @prop gradientReverse: If true, gradient will start from blue and go to pink
 * @prop children: Element wrapped by border
 */
function Border({ borderRadius, gradientReverse, children }) {
  return (
    <div
      className={`${styles.border} ${gradientReverse && styles.reverse}`}
      style={{
        borderRadius: borderRadius,
      }}
    >
      {children}
    </div>
  );
}

export default Border;
