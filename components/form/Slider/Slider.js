// import { useState } from 'react';
import { useMemo } from 'react';
import styles from './Slider.module.css';

const Slider = ({
  label,
  name,
  min,
  max,
  setRanges,
  value,
  values,
}) => {
  // const [bar, setBar] = useState(0);
  const handleChange = (e) => {
    // setBar(e.target.value);
    setRanges((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };
  const width = useMemo(() => {
    if (value > max / 2) {
      console.log((value * 100) / max);
      return (value * 100) / max;
    } else {
      console.log((value * 100) / max) + 2;
      return (value * 100) / max + 2;
    }
  }, [value]);

  return (
    <div className={styles.container}>
      <label className="text-regular">{label}</label>
      <div className={styles.sliderParent}>
        <span
          className={`${styles.track}`}
          style={{ width: `${Math.trunc(width)}%` }}
        ></span>
        <input
          name={name}
          type="range"
          // min={0}
          value={value}
          max={max}
          className={styles.slider}
          onChange={handleChange}
        />
        <span className={`text-regular ${styles.value}`}>
          {values[value] || value}
        </span>
      </div>
    </div>
  );
};

export default Slider;
