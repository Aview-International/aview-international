import { useState } from 'react';
import Slider from '../../../form/Slider/Slider';
import Border from '../../../UI/Border/Border';
import Button from '../../../UI/Button/Button';
import HorizontalLine from '../../../UI/HorizontalLine/HorizontalLine';
import Shadow from '../../../UI/Shadow/Shadow';
import styles from './FindGrowth.module.css';

const FindGrowth = () => {
  const [ranges, setRanges] = useState({
    uploadsPerMonth: 8,
    numberOfSubs: 100,
    averageViewCount: 250,
    languages: 3,
  });

  const sliders = [
    {
      label: 'Uploads per month',
      value: ranges.uploadsPerMonth,
      min: 0,
      max: 10,
      suffix: '',
    },
    {
      label: 'Number of subs',
      value: ranges.numberOfSubs,
      min: 0,
      max: 10,
      suffix: 'k',
    },
    {
      label: 'Average View Count',
      value: ranges.averageViewCount,
      min: 0,
      max: 10,
      suffix: 'k',
    },
    {
      label: 'Languages',
      value: ranges.languages,
      min: 0,
      max: 10,
      suffix: '',
    },
  ];
  return (
    <section className={`m-horizontal section ${styles.section}`}>
      <h2 className="section-title">
        <span className="gradient-text">Find Your International Growth!</span>
      </h2>
      <p className="text-regular">
        Use the calculator below to discover your increase in views and
        potential revenue!
      </p>
      <div>
        <Border borderRadius="5px">
          <div className={`shadow-parent ${styles.flexContainer}`}>
            <Shadow />
            <div className={styles.slider}>
              {sliders.map((item, i) => (
                <Slider key={`slider${i}`} {...item} />
              ))}
            </div>
            <span></span>
            <div className={styles.data}>
              <h3>
                <span className="gradient-text">XXX%</span>
              </h3>
              <p className="text-regular">growth in international views</p>
              <HorizontalLine />
              <h3>
                <span className="gradient-text">$XXX</span>
              </h3>
              <p className="text-regular">potential revenue</p>
            </div>
          </div>
        </Border>
        <Button type="secondary" isOnClick>
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default FindGrowth;
