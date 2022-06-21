import Border from '../../UI/Border/Border';
import styles from './Select.module.css';
import Image from 'next/image';
import Arrow from '../../../public/img/icons/select-arrow.svg';
import { useState } from 'react';
import HorizontalLine from '../../UI/HorizontalLine/HorizontalLine';
import OutsideClickHandler from 'react-outside-click-handler';
import Incorrect from '../../../public/img/icons/incorrect.svg';

const Select = ({ label, options, handleClick, hasSubmitted }) => {
  const [dropdown, setDropdown] = useState(false);
  const [answer, setAnswer] = useState('');

  return (
    <OutsideClickHandler onOutsideClick={() => setDropdown(false)}>
      <div
        className={`text-regular ${styles.dropdown}`}
        onClick={() => setDropdown(!dropdown)}
      >
        <p>{label}</p>
        <Border borderRadius="5px">
          <div className={styles.container}>
            <span>{answer || 'Select'}</span>
            <span className={`${styles.image} ${dropdown && styles.reverse}`}>
              <Image src={Arrow} alt="" />
            </span>
            {!answer && hasSubmitted && (
              <span className={styles.incorrect}>
                <Image src={Incorrect} alt="" />
              </span>
            )}
          </div>
        </Border>
        <div className={`${styles.modal} ${dropdown && styles.open}`}>
          <Border borderRadius="5px">
            {options.map((option, i) => (
              <div key={`option-${i}`}>
                <p
                  onClick={() => {
                    handleClick(i);
                    setAnswer(options[i]);
                  }}
                >
                  {option}
                </p>
                <HorizontalLine />
              </div>
            ))}
          </Border>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Select;
