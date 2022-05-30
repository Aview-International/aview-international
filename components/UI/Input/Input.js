import Border from "../Border/Border";
import styles from "./Input.module.css";
import Image from "next/image";
import Correct from "../../../public/img/icons/correct.svg";
import Incorrect from "../../../public/img/icons/incorrect.svg";
import { useState } from "react";

const Input = ({ isValid, _id, label, onChange,placeholder, name, type }) => {
  const [valid, setValid] = useState(undefined);
  const handleBlur = () => {
    if (!!isValid) setValid("correct");
    else setValid("incorrect");
  };
  return (
    <div className={styles.input_container}>
      <label htmlFor={_id} className={styles.input_label}>
        {label}
      </label>
      <div className={styles.flex_container}>
        <Border>
          <input
            id={_id}
            name={name}
            type={type}
            placeholder={placeholder}
            className={styles.input}
            onChange={(e) => onChange(e)}
            onBlur={handleBlur}
          />
          <span className={styles.highlight}></span>
        </Border>
        {valid === "correct" && (
          <Image src={Correct} alt="Correct" width={35} height={35} />
        )}
        {valid === "incorrect" && (
          <Image src={Incorrect} alt="Incorrect" width={35} height={35} />
        )}
      </div>
    </div>
  );
};

export default Input;
