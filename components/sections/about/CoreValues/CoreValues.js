import styles from "./CoreValues.module.css";

const VALUES = [
      {
        title: 'Fast Turnaround',
        description: 'Aview will guarantee a 24-hour turnaround on subtitle work and 48 hours turnaround on dubbed content. We understand the importance of being timely to maximize views.',
      },
      {
        title: 'Taliored for Crators',
        description: 'Aview understands each creator is different and will work closely with your team to find the best service and languages. No one service fits all. We will ensure you receive what is best for you and your brand.',
      },
      {
        title: 'Flexable Payment Plans',
        description: 'Aview creates personalized payment plans for each creator to ensure your needs and ROI is met. We will work closely with you and your brand to find a plan that works for you.',
      }
    ];

function CoreValues() {
    return (
      <section className="section m-horizontal">
      <div>
      <h2 className={`section-title ${styles["section-title"]}`}>
          Our <span className="gradient-text">Core Values</span>
        </h2>
        <p className={`section-description ${styles["section-description"]}`}>
          Aview focuses on three main items when it comes to our service. 
          We know every creator is different and tailor our approach.
        </p>
        </div>
        <ul className="core-vlaues">
          {VALUES.map((values) => (
            <div>
            <li>
              <span className={`section-title gradient-text ${styles['value-title']}`}>
                 {values.title}
              </span>
              <span className={`section-description ${styles["value-description"]}`}>
                 {values.description}
              </span>
            </li>
            </div>
          ))}
        </ul>
        </section>
    ); 
  };





  
export default CoreValues;
