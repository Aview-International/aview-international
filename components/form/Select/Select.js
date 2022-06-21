import Border from '../../UI/Border/Border';
import styles from './Select.module.css';
import Image from 'next/image';
import Arrow from '../../../public/img/icons/select-arrow.svg';
import { useState } from 'react';
import HorizontalLine from '../../UI/HorizontalLine/HorizontalLine';
import OutsideClickHandler from 'react-outside-click-handler';

const Select = ({ label, options, handleClick }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div
      className={`text-regular ${styles.dropdown}`}
      onClick={() => setDropdown(!dropdown)}
    >
      <p>{label}</p>
      <Border borderRadius="5px">
        <div className={styles.container}>
          <span>Select </span>
          <span className={`${styles.image} ${dropdown && styles.reverse}`}>
            <Image src={Arrow} alt="" />
          </span>
        </div>
      </Border>
      {/* {dropdown && ( */}
      <div className={`${styles.modal} ${dropdown && styles.open}`}>
        <Border borderRadius="5px">
          <OutsideClickHandler onOutsideClick={() => setDropdown(false)}>
            {options.map((option, i) => (
              <div key={`option-${i}`}>
                <p onClick={() => handleClick(i)}>{option}</p>
                <HorizontalLine />
              </div>
            ))}
          </OutsideClickHandler>
        </Border>
      </div>
      {/* )} */}
    </div>
  );
};

export default Select;
