import styles from "./Border.module.css";

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
