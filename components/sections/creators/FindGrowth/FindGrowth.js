import { useState, useMemo } from 'react';
import Slider from '../../../form/Slider/Slider';
import Border from '../../../UI/Border/Border';
import Button from '../../../UI/Button/Button';
import HorizontalLine from '../../../UI/HorizontalLine/HorizontalLine';
import Shadow from '../../../UI/Shadow/Shadow';
import styles from './FindGrowth.module.css';

const FindGrowth = () => {
  const [ranges, setRanges] = useState({
    uploadsPerMonth: 1,
    numberOfSubs: 1,
    averageViewCount: 1,
    languages: 1,
  });

  const sliders = [
    {
      label: 'Uploads per month',
      value: ranges.uploadsPerMonth,
      min: 1,
      max: 30,
      values: false,
      name: 'uploadsPerMonth',
    },
    // {
    //   label: 'Number of subs',
    //   value: ranges.numberOfSubs,
    //   min: 0,
    //   max: 10,
    //   suffix: 'k',
    //   name: 'numberOfSubs',
    // },
    {
      label: 'Average View Count',
      value: ranges.averageViewCount,
      min: 0,
      values: [
        '1K',
        '2K',
        '3.5K',
        '5K',
        '7.5K',
        '10K',
        '20K',
        '35k',
        '50K',
        '75K',
        '100K',
        '200K',
        '350k',
        '500K',
        '750k',
        '1M',
        '2M',
        '5M',
        '5M+',
      ],
      max: 18,
      name: 'averageViewCount',
    },
    {
      label: 'Languages',
      value: ranges.languages,
      values: false,
      min: 1,
      max: 10,
      name: 'languages',
    },
  ];

  const growth = useMemo(() => {
    return ranges.uploadsPerMonth * ranges.averageViewCount * ranges.languages;
  }, [ranges]);
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
                <Slider setRanges={setRanges} key={`slider${i}`} {...item} />
              ))}
            </div>
            <span></span>
            <div className={styles.data}>
              <h3>
                <span className="gradient-text">{`${growth}%`}</span>
              </h3>
              <p className="text-regular">growth in international views</p>
              <HorizontalLine />
              <h3>
                <span className="gradient-text">
                  ${growth * 15}
                </span>
              </h3>
              <p className="text-regular">potential revenue</p>
            </div>
          </div>
        </Border>
        <Button type="secondary" isOnClick={true}>
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default FindGrowth;
