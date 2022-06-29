/**
 * Container for Start Generating AVIEW Today! section of homepage
 */
import Input from '../../../UI/Input/Input';
import styles from './Generate.module.css';
import { useState } from 'react';
import { emailValidator, urlValidator } from '../../../../utils/regex';
import CheckBox from '../../../UI/Checkbox/Checkbox';
import Form from '../../../form/Form/Form';
import { submitForm } from '../../../../utils/submit-form';
import { useRouter } from 'next/router';
import PhoneNumberInput from '../../../form/PhoneNumberInput/input';

const Generate = ({ title }) => {
  const router = useRouter();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    url: '',
    languages: '',
    'Translations/Subtitles': 'No',
    Dubbing: 'No',
    Shorts: 'No',
  });

  const inputArray = [
    {
      validator: (value) => value.length >= 3,
      label: 'Name',
      _id: 'name',
      name: 'name',
      type: 'text',
      placeholder: 'Your name',
    },
    {
      validator: (value) => urlValidator(value),
      label: 'Channel Link',
      _id: 'channel_url',
      name: 'url',
      type: 'text',
      placeholder: 'URL to your social media channel',
    },
    {
      validator: (value) => emailValidator(value),
      label: 'Email Address',
      _id: 'email',
      name: 'email',
      type: 'email',
      placeholder: 'Your email address',
    },
    {
      validator: (value) => value.length >= 3,
      label: 'Which languages do you need translations for?',
      _id: 'languages',
      name: 'languages',
      type: 'text',
      placeholder: 'Input language(s) of interest',
    },
  ];

  const checkboxArray = [
    {
      name: 'Translations/Subtitles',
      label: 'Translations/Subtitles',
      value: 'Translations/Subtitles',
      tooltip:
        'Receive a translation file that can be uploaded directly to your YouTube video.',
    },
    {
      name: 'Dubbing',
      label: 'Dubbing',
      value: 'Dubbing',
      tooltip:
        'Receive your videos completely translated with voice-overs in the language of your choosing.',
    },
    {
      name: 'Shorts',
      label: 'Shorts',
      value: 'Shorts',
      tooltip:
        'Receive translated short form content that can be uploaded to YouTube, Instagram, TikTok and Facebook.',
    },
  ];
  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const hanldeCheckBox = (e) => {
    if (e.target.checked) {
      setData((prevState) => ({
        ...prevState,
        [e.target.name]: 'Yes',
      }));
    } else {
      setData((prevState) => ({
        ...prevState,
        [e.target.name]: 'No',
      }));
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(data);
    setHasSubmitted(true);
    try {
      if (
        !!(
          data.name &&
          data.url &&
          emailValidator(data.email) &&
          data.languages
        )
      ) {
        submitForm('generate-requests', data);
        router.push('/success?from=generate-requests');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      className={`section m-horizontal ${styles.parent}`}
      id="generate-aview"
    >
      <h2 className={`section-title`}>
        <span className="gradient-text">{title}</span>
      </h2>
      <Form
        name="generate-requests"
        buttonText="Join Now!"
        buttonType="secondary"
        submitHandler={submitHandler}
      >
        <input type="hidden" name="phone" value={data.phone} />
        <Input
          isValid={inputArray[0].validator(data.name)}
          onChange={handleChange}
          hasSubmitted={hasSubmitted}
          {...inputArray[0]}
        />
        <PhoneNumberInput
          label="Phone Number"
          onChange={(e) => {
            setData((prevState) => ({
              ...prevState,
              phone: e,
            }));
            console.log(data);
          }}
          value={data.phone}
        />
        {inputArray.slice(1).map((item, index) => (
          <Input
            key={`input_${index}`}
            isValid={item.validator(data[item.name])}
            onChange={handleChange}
            hasSubmitted={hasSubmitted}
            {...item}
          />
        ))}
        <p className={`text-regular ${styles.services}`}>Services</p>
        {checkboxArray.map((item, index) => (
          <CheckBox
            name="services[]"
            onChange={hanldeCheckBox}
            key={index}
            {...item}
          />
        ))}
      </Form>
    </section>
  );
};

export default Generate;
