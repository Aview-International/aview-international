import Border from '../Border/Border';
import styles from './Input.module.css';
import Image from 'next/image';
import Correct from '../../../public/img/icons/correct.svg';
import Incorrect from '../../../public/img/icons/incorrect.svg';

/**
 * Reusable input field
 *
 * @prop label: Label of the input
 * @prop onChange: Function to accept the value of the input
 * @prop value: value of the input
 * @prop isValid: Whether the input is valid
 * @prop _id: ID of the input
 * @prop placeholder: Placeholder for the input
 * @prop name: Name of the input
 * @prop type: Type of the input
 * @prop hasSubmitted: Whether the input has been submitted
 *
 * @author Victor Ogunjobi
 */

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
          />
          <span className={styles.highlight}></span>
        </Border>
        <span className={styles.validation_icon}>
          {isValid && (
            <Image src={Correct} alt="Correct" width={35} height={35} />
          )}
          {hasSubmitted && !isValid && (
            <Image src={Incorrect} alt="Incorrect" width={35} height={35} />
          )}
        </span>
      </div>
    </div>
  );
};

export default Input;
