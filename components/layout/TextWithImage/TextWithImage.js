import styles from "./TextWithImage.module.css";

function TextWithImage({ children }) {
  return <div className={styles["text-with-image"]}>{children}</div>;
}

export default TextWithImage;
