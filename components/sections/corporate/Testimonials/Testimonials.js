import styles from './Testimonials.module.css';
import defaultIcon from '../../../../public/img/team/default.jpeg';
import quoteIcon from '../../../../public/img/icons/quotationMarks.svg'
import Card from '../../../UI/Card/Card';
import Image from 'next/image';
import Button from '../../../UI/Button/Button';
import TestimonialCardRow from '../../../layout/TestimonialCardRow/TestimonialCardRow';

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
    <section className={`section m-horizontal ${styles.section}`}>
      <h2 className={`section-title ${styles['section-title']}`}>
        <span className="gradient-text"> Testimonials </span>
      </h2>
      <div className={styles.row}>
      <TestimonialCardRow>
      {MILESTONES.map((milestone, i) => (
        <Cards key={`milestone-${i}]`} {...milestone} />
      ))}
      </TestimonialCardRow>
      </div>
      <Button type="primary" link="/translators#apply-today">
            Contact Us
      </Button>
    </section>
  );
}

export const Cards = ({ description, name, graphic, picture, i }) => {
  return (
    <div className={styles.card_container}>
    <Card>
      <div className={styles.child_container}>
      <div className={`card-description ${styles.card_content}`}>
      <div className={styles.graphic}>
            <Image src={graphic} />
          </div>
        <p className={styles.description}>{description}</p>
        </div>
        
        <div className={`profile ${styles.card_content}`}>
        <div className={styles.picture}>
            <Image src={picture} />
          </div>
          <p className={styles.name}>{name}</p>
          <div className={styles.profile_background} />
          </div>
      </div>
    </Card>
    </div>
  );
}

export default Testimonials;
