import Border from '../Border/Border';
import styles from './Input.module.css';
import Image from 'next/image';
import Correct from '../../../public/img/icons/correct.svg';
import Incorrect from '../../../public/img/icons/incorrect.svg';
import { useState } from 'react';

const Input = ({
  isValid,
  _id,
  label,
  onChange,
  placeholder,
  name,
  type,
  hasSubmitted,
}) => {
  const [valid, setValid] = useState(false);
  const handleBlur = () => {
    if (!!isValid) setValid(true);
    else setValid(false);
  };
  return (
    <div className={styles.input_container}>
      <label htmlFor={_id} className={`text-regular ${styles.input_label}`}>
        {label}
      </label>
      <div className={styles.flex_container}>
        <Border>
          <input
            id={_id}
            name={name}
            type={type}
            placeholder={placeholder}
            className={`text-regular ${styles.input}`}
            onChange={(e) => onChange(e)}
            onBlur={handleBlur}
          />
          <span className={styles.highlight}></span>
        </Border>
        <span className={styles.validation_icon}>
          {valid && (
            <Image src={Correct} alt="Correct" width={35} height={35} />
          )}
          {!hasSubmitted &&
            (!valid && (
              <Image src={Incorrect} alt="Incorrect" width={35} height={35} />
            ))}
        </span>
      </div>
    </div>
  );
};

export default Input;
