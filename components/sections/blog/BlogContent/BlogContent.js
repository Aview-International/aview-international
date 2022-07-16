import Border from '../../../UI/Border/Border';
import styles from './BlogContent.module.css';
import { useEffect, useState } from 'react';
import { getStories } from '../../../../utils';
import Image from 'next/image';

const stories = ['', '', '', '', '', '', ''];
const BlogContent = () => {
  console.log(process.env.NEXT_PUBLIC_MEDIUM_API_KEY);
  // const [stories, setStories] = useState([]);
  const fetch = async () => {
    try {
      const response = await getStories();
      console.log(response.data.items);
      setStories(response.data.items);
    } catch (error) {}
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <section className={`section m-horizontal ${styles.section}`}>
      <h2 className={`section-title ${styles.title}`}>
        Enjoy our <span className="gradient-text">Blogs</span>
      </h2>
      <HeroStory />
      <div className={styles['grid-container']}>
        {stories?.map((story, i) => (
          <OtherStories
            key={`story-${i}`}
            img={story.thumbnail}
            title={story.title}
          />
        ))}
      </div>
    </section>
  );
};

const HeroStory = () => {
  return (
    <div className={styles['hero-stories']}>
      <Border>
        <div className={styles['flex-container']}>
          <div></div>
          <div>
            <small className="text-regular">Date</small>
            <h3>Blog Title</h3>
            <p className="text-regular">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
              varius maecenas eleifend id non vulputate enim. Egestas sed mauris
              dictum volutpat, in.
            </p>
          </div>
        </div>
      </Border>
    </div>
  );
};

const OtherStories = ({ title, img, date }) => {
  return (
    <div className={styles['other-stories']}>
      <Border>
        <div className={`${styles.story}`}>
          <div>
            {/* <img
              src={img}
              alt=""
              layout="responsive"
              width={400}
              height={300}
            /> */}
          </div>
          <div>
            <small className="text-regular">Date</small>
            <h3>Blog Post</h3>
            <p className="text-regular">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
              varius maecenas eleifend id non vulputate enim. Egestas sed mauris
              dictum volutpat, in.
            </p>
          </div>
        </div>
      </Border>
    </div>
  );
};

export default BlogContent;
