import styles from './input.module.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Border from '../../UI/Border/Border';

/**
 * Phone Number input field
 *
 * @prop label: Label of the input
 * @prop onChange: Function to accept the value of the input
 * @prop value: value of the input
 *
 * @author Victor Ogunjobi
 */

const PhoneNumberInput = ({ label, onChange, value }) => {
  return (
    <div className={`text-regular ${styles.container}`}>
      <label>{label}</label>
      <Border borderRadius="5px">
        <div className={`text-regular ${styles.parent}`}>
          <PhoneInput
            international
            countryCallingCodeEditable={false}
            defaultCountry="CA"
            value={value}
            onChange={onChange}
          />
        </div>
      </Border>
    </div>
  );
};

export default PhoneNumberInput;
