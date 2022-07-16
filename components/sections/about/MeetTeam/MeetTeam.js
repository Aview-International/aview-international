import Row4 from '../../../layout/Row4/Row4';

import Profile from '../../../UI/Profile/Profile';

import defaultIcon from '../../../../public/img/team/default.jpeg';
import Victor from '../../../../public/img/team/Victor.png';
import Mari from '../../../../public/img/team/Mari.png';
import Akshay from '../../../../public/img/team/Akshay.png';
import Andrew from '../../../../public/img/team/Andrew.png';
import Garnet from '../../../../public/img/team/Garnet.png';
import Montoya from '../../../../public/img/team/Montoya.png';
import Taehun from '../../../../public/img/team/Taehun.png';
import Michell from '../../../../public/img/team/Michell.png';
import styles from './MeetTeam.module.css';

const TEAM = [
  {
    role: 'Founders',
    members: [
      {
        name: 'Akshay Maharaj',
        description: 'Lorem ipsum',
        picture: Akshay,
      },
      {
        name: 'Garnet Delsey',
        description: 'Lorem ipsum',
        picture: Garnet,
      },
    ],
  },
  {
    role: 'Development Team',
    members: [
      {
        name: 'Andrew Qiao',
        description: 'Software Engineer',
        picture: Andrew,
      },
      {
        name: 'Victor Ogunjobi',
        description: 'Software Engineer',
        picture: Victor,
      },
      {
        name: 'Taehun Jang',
        description: 'Software Engineer',
        picture: Taehun,
      },
      {
        name: 'Jon-Carlo Montoya Timmer',
        description: 'Software Engineer',
        picture: Montoya,
      },
    ],
  },
  {
    role: 'Design Team',
    members: [
      {
        name: 'Marichu Agustin',
        description: 'Graphic Designer',
        picture: Mari,
      },
      {
        name: 'Michell Tham',
        description: 'Graphic Designer',
        picture: Michell,
      },
      {
        name: 'Luis Sarceño',
        description: 'Graphic Designer',
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
