import Row4 from '../../../layout/Row4/Row4';
import Profile from '../../../UI/Profile/Profile';

import loganIcon from '../../../../public/img/creators/profiles/logan-paul.png';
import ninjaIcon from '../../../../public/img/creators/profiles/ninja.png';
import saudBrothersIcon from '../../../../public/img/creators/profiles/saud-brothers.png';
import whatIfIcon from '../../../../public/img/creators/profiles/what-if.png';
import yesTheoryIcon from '../../../../public/img/creators/profiles/yes-theory.png';
import markRoberIcon from '../../../../public/img/creators/profiles/mark-rober.png';
import goodSimpleLivingIcon from '../../../../public/img/creators/profiles/good-simple-living.png';
import mrBuildItIcon from '../../../../public/img/creators/profiles/mr-build-it.png';
import styles from './GeneratingAview.module.css';

const CREATORS = [
  {
    name: 'Logan Paul',
    description: '23.4M Subs',
    picture: loganIcon,
  },
  {
    name: 'Ninja',
    description: '23.9M Subs',
    picture: ninjaIcon,
  },
  {
    name: 'Saud Brothers',
    description: '6.53M Subs',
    picture: saudBrothersIcon,
  },
  {
    name: 'What If',
    description: '6.39M Subs',
    picture: whatIfIcon,
  },
  {
    name: 'Yes Theory',
    description: '7.48M Subs',
    picture: yesTheoryIcon,
  },
  {
    name: 'Mark Rober',
    description: '22M Subs',
    picture: markRoberIcon,
  },
  {
    name: 'Good Simple Living',
    description: '393K Subs',
    picture: goodSimpleLivingIcon,
  },
  {
    name: 'Mr. Build It',
    description: '665K Subs',
    picture: mrBuildItIcon,
  },
];

/**
 * @author Andrew Qiao
 */
function GeneratingAview() {
  return (
    <section className="section m-horizontal">
      <h2 className={`gradient-text section-title ${styles['section-title']}`}>
        Generating Aview For
      </h2>
      <CreatorsGrid />
    </section>
  );
}

function CreatorsGrid() {
  return (
    <Row4>
      {CREATORS.map((creator, i) => (
        <Profile {...creator} key={`creator-${i}`} />
      ))}
    </Row4>
  );
}

export default GeneratingAview;
