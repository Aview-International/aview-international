import Border from "../Border/Border";
import Shadow from "../Shadow/Shadow";

import styles from "./Card.module.css";

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
