import Border from "../Border/Border";
import Shadow from "../Shadow/Shadow";

import styles from "./Card.module.css";

/**
 * Card container, built-in border and hover shadow
 * Only contains background gradient, doesn't contain padding
 *
 * @prop children: Elements to be wrapped by card
 */
function Card({ children }) {
  return (
    <Border>
      <div className={`shadow-parent ${styles.card}`}>
        <Shadow />
        {children}
      </div>
    </Border>
  );
}

export default Card;
