import { useMemo } from 'react';
import styles from './Slider.module.css';



/**
 * Input Slider component
 * @prop label: String, to display the label of the input
 * @prop name: The name of the input, for events handling
 * @prop max: The maximum value of the slider
 * @prop setRanges: A function to set the value of the slider
 * @prop value: Value of the a single input
 * @prop values: Value to be used for number that don't grow mathematically
 *
 * @author Victor Ogunjobi
 */

const Slider = ({
  label,
  name,
  max,
  setRanges,
  value,
  values,
}) => {
  const handleChange = (e) => {
    setRanges((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };
  const width = useMemo(() => {
    if (value > max / 2) {
      return (value * 100) / max;
    } else {
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
