import Border from "../../UI/Border/Border";

import styles from "./Input.module.css";

function Input({ type, placeholder, bgColor }) {
  return (
    <Border borderRadius="3px" gradientReverse={true}>
      <input
        type={type}
        placeholder={placeholder}
        className={`${styles.input} ${styles[bgColor]}`}
      />
    </Border>
  );
}

export default Input;
