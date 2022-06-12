import Row4 from '../../../layout/Row4/Row4';

import Profile from '../../../UI/Profile/Profile';

import defaultIcon from '../../../../public/img/team/default.jpeg';
import styles from './MeetTeam.module.css';

const TEAM = [
  {
    role: 'CoFounders',
    members: [
      {
        name: 'none',
        description: 'none',
        picture: defaultIcon,
      },
      {
        name: 'Lorem ipsum',
        description: 'Lorem ipsum',
        picture: defaultIcon,
      },
      {
        name: 'Lorem ipsum',
        description: 'Lorem ipsum',
        picture: defaultIcon,
      },
      {
        name: 'none',
        description: 'none',
        picture: defaultIcon,
      },
    ],
  },
  {
    role: 'Product Team',
    members: [
      {
        name: 'Lorem ipsum',
        description: 'Lorem ipsum',
        picture: defaultIcon,
      },
      {
        name: 'Lorem ipsum',
        description: 'Lorem ipsum',
        picture: defaultIcon,
      },
      {
        name: 'Lorem ipsum',
        description: 'Lorem ipsum',
        picture: defaultIcon,
      },
      {
        name: 'Lorem ipsum',
        description: 'Lorem ipsum',
        picture: defaultIcon,
      },
    ],
  },
  {
    role: 'Head Translators',
    members: [
      {
        name: 'Lorem ipsum',
        description: 'Lorem ipsum',
        picture: defaultIcon,
      },
      {
        name: 'Lorem ipsum',
        description: 'Lorem ipsum',
        picture: defaultIcon,
      },
      {
        name: 'Lorem ipsum',
        description: 'Lorem ipsum',
        picture: defaultIcon,
      },
      {
        name: 'Lorem ipsum',
        description: 'Lorem ipsum',
        picture: defaultIcon,
      },
    ],
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
          Meet the Team
        </h2>
        <TeamGrid />
      </section>
    </>
  );
}

function TeamGrid() {
  return TEAM.map((team, i) => (
    <div className={styles['team-group']} key={`team-group-${i}`}>
      <h2 className={styles.role}>{team.role}</h2>
      <Row4>
        {team.members.map((member, j) =>
          member.name === 'none' ? (
            <div className="lg-only" key={`profile-${j}`}></div>
          ) : (
            <Profile
              name={member.name}
              description={member.description}
              picture={member.picture}
              key={`profile-${j}`}
            />
          )
        )}
      </Row4>
    </div>
  ));
}

export default MeetTeam;
