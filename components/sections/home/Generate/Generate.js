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
const Generate = () => {
  const [data, setData] = useState({
    name: '',
    url: '',
    email: '',
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
    // setHasSubmitted(true);
    try {
      if (!!(data.name && data.url && data.email && data.languages)) {
        submitForm('generate-requests', data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className={`section ${styles.parent}`}>
      <h2 className={`section-title`}>
        <span className="gradient-text">Start Generating AVIEW Today</span>
      </h2>
      <Form
        name="generate-requests"
        buttonText="Join Now!"
        buttonType="secondary"
        submitHandler={submitHandler}
      >
        {inputArray.map((item, index) => (
          <Input
            key={`input_${index}`}
            isValid={item.validator(data[item.name])}
            onChange={handleChange}
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
