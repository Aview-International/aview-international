import Image from 'next/image';

import Border from '../../UI/Border/Border';

import correctIcon from '../../../public/img/icons/correct.svg';
import incorrectIcon from '../../../public/img/icons/incorrect.svg';
import styles from './Input.module.css';

/**
 * Text input for forms
 *
 * @prop type: Type of text input
 * @prop placeholder: Placeholder text for input
 * @prop bgColor: Background color of input (light or dark)
 * @prop changeHandler: Function run when input value is changed
 */
function Input({
  type,
  placeholder,
  bgColor,
  changeHandler,
  value,
  valid,
  hasSubmitted,
  name,
}) {
  return (
    <div className={styles['input-container']}>
      <Border borderRadius="3px" gradientReverse={true}>
        <input
          type={type}
          placeholder={placeholder}
          className={`${styles.input} ${styles[bgColor]}`}
          onChange={changeHandler}
          value={value}
          name={name}
        />
      </Border>
      {!valid && hasSubmitted && (
        <div className={styles.icon}>
          <Image src={incorrectIcon} alt="Incorrect input icon" />
        </div>
      )}
      {valid && (
        <div className={styles.icon}>
          <Image src={correctIcon} alt="Correct input icon" />
        </div>
      )}
    </div>
  );
}

export default Input;
