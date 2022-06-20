import styles from './CompanyCulture.module.css';
import Row2 from '../../../layout/Row2/Row2';
import IconCard from '../../../UI/IconCard/IconCard';
import teambuilding from '../../../../public/img/icons/organization.svg';
import collaborativeWork from '../../../../public/img/icons/repo.svg';
import personalGrowth from '../../../../public/img/icons/heart.svg';
import ed2Focus from '../../../../public/img/icons/rocket.svg';

const CARD_CONTENT = [
  {
    title: 'Teambuilding',
    graphic: teambuilding,
  },
  {
    title: 'Collaborative Work',
    graphic: collaborativeWork,
  },
  {
    title: 'Personal Growth',
    graphic: personalGrowth,
  },
  {
    title: 'EDII Focus',
    graphic: ed2Focus,
  },
];

function CompanyCulture() {
  return (
    <section className="section m-horizontal">
      <h2 className={`gradient-text section-title ${styles['section-title']}`}>
        Company Culture
      </h2>
      <Row2>
        {CARD_CONTENT.map((content, i) => (
          <IconCard
            key={`card-${i}`}
            title={content.title}
            graphic={content.graphic}
            horizontal={true}
          />
        ))}
      </Row2>
    </section>
  );
}

export default CompanyCulture;
