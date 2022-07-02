import styles from './Testimonials.module.css';
import Row3 from '../../../layout/Row3/Row3';
import defaultIcon from '../../../../public/img/team/default.jpeg';
import quoteIcon from '../../../../public/img/icons/quotationMarks.svg'
import Card from '../../../UI/Card/Card';
import Image from 'next/image';
import Border from '../../../UI/Border/Border';
import Shadow from '../../../UI/Shadow/Shadow';


const MILESTONES = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt purus purus neque tellus elementum nibh elementum. Lorem donec suspendisse viverra massa at.",
    graphic: quoteIcon,
    name: 'Lorem ipsum',
    picture: defaultIcon,
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt purus purus neque tellus elementum nibh elementum. Lorem donec suspendisse viverra massa at.',
      graphic: quoteIcon,  
      name: 'Lorem ipsum',
      picture: defaultIcon,
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt purus purus neque tellus elementum nibh elementum. Lorem donec suspendisse viverra massa at.',
    graphic: quoteIcon,
    name: 'Lorem ipsum',
    picture: defaultIcon,
  },
];

function Testimonials() {
  return (
      <section className="m-horizontal section">
      <h2 className={`section-title ${styles['section-title']}`}>
        <span className="gradient-text"> Milestones Section </span>
      </h2>
      <Row3>
      {MILESTONES.map((milestone, i) => (
        <Cards key={`milestone-${i}]`} {...milestone} />
      ))}
      </Row3>
    </section>
  );
}

export const Cards = ({ description, name, graphic, picture, i }) => {
  return (
    <>
    <Border>
    <div className={`shadow-parent ${styles.child_container}`}>
    <Shadow className={styles.child_shadow} />
      <div className={styles.milestone}>
      <div className={styles.card_info}>
      <div className={styles.graphic}>
            <Image src={graphic} />
          </div>
        <p className={styles.description}>{description}</p>
        </div>
        <Shadow className={styles.child_shadow} />
        <div className={styles.profile}>
        <div className={styles.picture}>
            <Image src={picture} />
          </div>
          <p className={styles.name}>{name}</p>
          </div>
      </div>
      </div>
    </Border>
    </>
  );
}

export default Testimonials;
