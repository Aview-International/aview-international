import { useState } from 'react';
import styles from './Slider.module.css';

const Slider = ({ label, suffix, min, max, value }) => {
  const [bar, setBar] = useState(0);
  const handleChange = (e) => {
    setBar(e.target.value);
  };
  return (
    <div className={styles.container}>
      <label className="text-regular">{label}</label>
      <div className={styles.sliderParent}>
        <span
          className={`${styles.track}`}
          style={{ width: `${bar * 10}%` }}
        ></span>
        <input
          type="range"
          min={min}
          value={bar}
          max={max}
          className={styles.slider}
          onChange={handleChange}
        />
        <span className={`text-regular ${styles.value}`}>
          {value}
          {suffix}
        </span>
      </div>
    </div>
  );
};

export default Slider;
