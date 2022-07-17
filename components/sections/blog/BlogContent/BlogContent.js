import Border from '../../../UI/Border/Border';
import styles from './BlogContent.module.css';
import { useEffect, useState } from 'react';
import { ConvertDateAndTime, getStories, ToText } from '../../../../utils';
import Button from '../../../UI/Button/Button';

const BlogContent = () => {
  const [stories, setStories] = useState([]);
  const fetch = async () => {
    try {
      const response = await getStories();
      setStories(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <section className={`section m-horizontal ${styles.section}`}>
      <h2 className={`section-title ${styles.title}`}>
        Enjoy our <span className="gradient-text">Blogs</span>
      </h2>
      <div className={styles['flex-container']}>
        {stories?.map((story, i) => (
          <OtherStories
            key={`story-${i}`}
            img={story.thumbnail}
            title={story.title}
            date={story.pubDate}
            content={story.content}
            link={story.link}
          />
        ))}
      </div>
      <div className={styles.btn}>
        <Button isOnClick type="secondary">
          Load More
        </Button>
      </div>
    </section>
  );
};

const OtherStories = ({ title, img, date, content, link }) => {
  return (
    <a className={styles['other-stories']} href={link} target="_blank">
      <Border>
        <div className={styles.story}>
          <div className={styles['img-container']}>
            {img && <img src={img} alt="" />}
          </div>
          <div>
            <small className="text-regular">{ConvertDateAndTime(date)}</small>
            <h3>{title}</h3>
            <p className="text-regular">
              {ToText(content).substring(0, 100)}...
            </p>
          </div>
        </div>
      </Border>
    </a>
  );
};

export default BlogContent;
