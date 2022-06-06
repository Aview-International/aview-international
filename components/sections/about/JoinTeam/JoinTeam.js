import { useState, useRef } from 'react';
import { country_list } from '../../../../constants';
import { emailValidator, urlValidator } from '../../../../utils/regex';
import Incorrect from '../../../../public/img/icons/incorrect.svg';
import { File_Form } from '../../../form/Form/Form';
import Border from '../../../UI/Border/Border';
import Input from '../../../UI/Input/Input';
import styles from './JoinTeam.module.css';
import Image from 'next/image';
import { uploadResume } from '../../../../utils/submit-form';
import { Dotted_Border } from '../../../../utils/svgs';
import FormData from 'form-data';

const JoinTeam = () => {
  const formRef = useRef();
  const [data, setData] = useState({
    name: '',
    country: '',
    email: '',
    linkedin_url: '',
    positions: '',
    resume: '',
  });
  const [valid, setValid] = useState(true);
  const submitHandler = async (e) => {
    e.preventDefault();
    !data.country ? setValid(false) : null;
    if (
      !(
        data.name &&
        data.country &&
        data.email &&
        data.linkedin_url &&
        data.positions &&
        data.resume
      )
    ) {
      return;
    }
    uploadResume(data);
    console.log('sent');
  };
  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <section className={`section m-horizontal ${styles.section}`}>
      <h2 className={`section-title gradient-text ${styles.section_title}`}>
        Join the Team
      </h2>
      <File_Form
        formRef={formRef}
        name="team-application"
        buttonText="Send Message"
        buttonType="primary"
        submitHandler={submitHandler}
      >
        <div className={styles.flex_container}>
          <Input
            isValid={data.name.length > 1}
            _id="name"
            label="Name"
            onChange={handleChange}
            placeholder="Your name"
            name="name"
            type="text"
          />
          <div>
            <p className="text-regular">Country</p>
            <Border borderRadius="5px">
              <select
                className="text-regular"
                defaultValue={'Select'}
                name="country"
                onChange={(e) => {
                  handleChange(e);
                  setValid(true);
                }}
              >
                <option value="Select" disabled>
                  Select
                </option>
                {country_list.map((country, i) => (
                  <option key={`country-${i}`}>{country}</option>
                ))}
              </select>
              {!valid && (
                <span className={styles.select_error}>
                  <Image
                    src={Incorrect}
                    alt="Incorrect"
                    width={35}
                    height={35}
                  />
                </span>
              )}
            </Border>
          </div>
        </div>
        <Input
          isValid={emailValidator(data.email)}
          _id="email"
          label="Email Address"
          onChange={handleChange}
          placeholder="Your email address"
          name="email"
          type="email"
        />
        <Input
          isValid={urlValidator(data.linkedin_url)}
          _id="linkedin_url"
          label="LinkedIn URL"
          onChange={handleChange}
          placeholder="Linkedin URL"
          name="linkedin_url"
          type="text"
        />

        <Input
          isValid={data.positions.length > 2}
          _id="positions"
          label="What position would you like to work as?"
          onChange={handleChange}
          placeholder="Type position(s) here"
          name="positions"
          type="text"
        />
        <label htmlFor="file_upload" className={styles.file_label}>
          <input
            id="file_upload"
            type="file"
            name="resume"
            accept="application/doc, application/docx, application/pdf"
            onChange={handleChange}
            value={data.resume}
          />
          <Dotted_Border />
        </label>
        <br />
        {data.resume !== undefined && (
          <div className={styles.file_name}>
            <p className="text-regular">{data.resume.name}</p>
            <span
              className="gradient-text"
              onClick={() =>
                setData((prevState) => ({
                  ...prevState,
                  resume: '',
                }))
              }
            >
              X
            </span>
          </div>
        )}
        <br />
      </File_Form>
    </section>
  );
};

export default JoinTeam;
