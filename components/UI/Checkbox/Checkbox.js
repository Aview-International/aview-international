import Image from 'next/image';
import Tooltip from '../../../public/img/icons/tooltip.svg';
import Info from '../../../public/img/icons/info.svg';
import Border from '../Border/Border';
import styles from './Checkbox.module.css';

const CheckBox = ({ label, value, onChange, tooltip, name }) => {
  return (
    <label className={`text-regular ${styles.checkbox_label}`}>
      <input
        type="checkbox"
        value={value}
        onChange={(e) => onChange(e)}
        name={name}
      />
      {label}
      <span className={styles.checkbox_span}>
        <span></span>
      </span>
      <div className={styles.tooltip_popup}>
        <span className={styles.info}>
          <Image src={Info} alt="info" />
        </span>
        <div className={styles.tooltip_container}>
          <span className={styles.tooltip_icon}>
            <Image src={Tooltip} alt="Tooltip" />
          </span>
          <Border>
            <p>{tooltip}</p>
          </Border>
        </div>
      </div>
    </label>
  );
};

export default CheckBox;
