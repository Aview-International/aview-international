import styles from "./TextWithImage.module.css";

/**
 * Container composed of text on one side and an image on the other side
 *
 * @prop children: Two divs, one for text and buttons, other for graphic
 */
function TextWithImage({ children }) {
  return <div className={styles["text-with-image"]}>{children}</div>;
}

export default TextWithImage;
