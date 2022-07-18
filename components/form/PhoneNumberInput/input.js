import styles from './input.module.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Border from '../../UI/Border/Border';
import Correct from '../../../public/img/icons/correct.svg';
import Incorrect from '../../../public/img/icons/incorrect.svg';
import Image from 'next/image';

/**
 * Phone Number input field
 *
 * @prop label: Label of the input
 * @prop onChange: Function to accept the value of the input
 * @prop value: value of the input
 *
 * @author Victor Ogunjobi
 */

const PhoneNumberInput = ({
  label,
  onChange,
  value,
  isValid,
  hasSubmitted,
}) => {
  return (
    <div className={`text-regular ${styles.container}`}>
      <label>{label}</label>
      <Border borderRadius="5px">
        <div className={`text-regular ${styles.parent}`}>
          <PhoneInput
            international
            countryCallingCodeEditable={false}
            defaultCountry="US"
            value={value}
            onChange={onChange}
          />
        </div>
        <span className={styles.validation_icon}>
          {isValid && (
            <Image src={Correct} alt="Correct" width={35} height={35} />
          )}
          {hasSubmitted && !isValid && (
            <Image src={Incorrect} alt="Incorrect" width={35} height={35} />
          )}
        </span>
      </Border>
    </div>
  );
};

export default PhoneNumberInput;
