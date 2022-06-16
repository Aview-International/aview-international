import Image from 'next/image';
import SuccessImage from '../../public/img/graphics/submission-success.svg';
import styles from './index.module.css';
import { useRouter } from 'next/router';
import Button from '../../components/UI/Button/Button';
import { useEffect, useState } from 'react';

/**
 * Successs page for form submissions.
 * To reuse this page, title and message is required
 * Add title and message to data array in the component
 * Add a case to the useEffect to set the state to your desired output
 */


const Sucesss = () => {
  const router = useRouter();
  const [response, setReponse] = useState({
    title: '',
    message: '',
  });
  const data = [
    {
      title: 'Thank You',
      message: 'We have received your request and will be in touch shortly.',
    },
    {
      title: 'Application Submitted',
      message:
        'Our team will reach out to you if you are selected to be a part of the team, thank you for applying.',
    },
  ];
  useEffect(() => {
    switch (router.asPath.split('=')[1]) {
      case 'generate-requests':
        setReponse(data[0]);
        break;
    }
  }, []);
  return (
    <div className={`section m-horizontal ${styles.section}`}>
      <div>
        <div className={styles.image}>
          <Image src={SuccessImage} alt="Success" />
        </div>
        <h2 className="section-title">
          <span className="gradient-text">{response.title}</span>
        </h2>
        <p className="text-regular">{response.message}</p>
        <Button type="primary" isOnClick={true} onClick={() => router.back()}>
          Go back
        </Button>
      </div>
    </div>
  );
};

export default Sucesss;
