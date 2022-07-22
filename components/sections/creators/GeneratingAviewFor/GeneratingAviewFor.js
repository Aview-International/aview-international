import LoganPaul from '../../../../public/img/creators/profiles/logan-paul.png';
import Ninja from '../../../../public/img/creators/profiles/ninja.png';
import SaudBrothers from '../../../../public/img/creators/profiles/saud-brothers.png';
import WhatIf from '../../../../public/img/creators/profiles/what-if.png';
import YesTheory from '../../../../public/img/creators/profiles/yes-theory.png';
import MarkRober from '../../../../public/img/creators/profiles/mark-rober.png';
import GoodSimpleLiving from '../../../../public/img/creators/profiles/good-simple-living.png';
import AmandaCerney from '../../../../public/img/creators/profiles/amanda-cerney.png';
import styles from './GeneratingAviewFor.module.css';
import Row4 from '../../../layout/Row4/Row4';
import Profile from '../../../UI/Profile/Profile';

const CreatorsArray = [
  {
    name: 'Logan Paul',
    description: 'Lorem ipsum',
    picture: LoganPaul,
  },
  {
    name: 'Ninja',
    description: 'Lorem ipsum',
    picture: Ninja,
  },
  {
    name: 'Saud Brothers',
    description: 'Lorem ipsum',
    picture: SaudBrothers,
  },
  {
    name: 'What If',
    description: 'Lorem ipsum',
    picture: WhatIf,
  },
  {
    name: 'Yes Theory',
    description: 'Lorem ipsum',
    picture: YesTheory,
  },
  {
    name: 'Mark Rober',
    description: 'Lorem ipsum',
    picture: MarkRober,
  },
  {
    name: 'Good Simple Living',
    description: 'Lorem ipsum',
    picture: GoodSimpleLiving,
  },
  {
    name: 'Amanda Cerney',
    description: 'Lorem ipsum',
    picture: AmandaCerney,
  },
];

/**
 * @author Andrew Qiao
 */
function MeetTeam() {
  return (
    <>
      <section className={`section m-horizontal ${styles.section}`}>
        <h2
          className={`section-title gradient-text ${styles['section-title']}`}
        >
          Generating Aview For
        </h2>
        <Creators />
      </section>
    </>
  );
}

/**
 * Grid Card of creators
 * @author Victor Ogunjobi
 */
const Creators = () => {
  return (
    <div className={styles['team-group']}>
      <Row4>
        {CreatorsArray.map((member, j) => (
          <Profile
            name={member.name}
            description={member.description}
            picture={member.picture}
            key={`profile-${j}`}
          />
        ))}
      </Row4>
    </div>
  );
};

export default MeetTeam;
