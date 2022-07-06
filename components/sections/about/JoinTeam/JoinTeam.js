import { useState } from 'react';
import { country_list } from '../../../../constants';
import { emailValidator, urlValidator } from '../../../../utils/regex';
import Incorrect from '../../../../public/img/icons/incorrect.svg';
import { File_Form } from '../../../form/Form/Form';
import Border from '../../../UI/Border/Border';
import Input from '../../../UI/Input/Input';
import styles from './JoinTeam.module.css';
import Image from 'next/image';
import { submitFile } from '../../../../utils/submit-form';
import DottedBorder from '../../../UI/DottedBorder/DottedBorder';
import Upload1 from '../../../../public/img/icons/uploadIcon1.svg';
import Upload2 from '../../../../public/img/icons/uploadIcon2.svg';

const JoinTeam = () => {
  const [data, setData] = useState({
    'form-name': 'team-application',
    name: '',
    country: '',
    email: '',
    linkedin_url: '',
    positions: '',
    resume: '',
    coverLetter: '',
  });
  const [valid, setValid] = useState(true);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    !data.country ? setValid(false) : null;
    if (
      !(
        data.name &&
        data.country &&
        data.email &&
        data.linkedin_url &&
        data.positions &&
        data.file
      )
    ) {
      return;
    }
    submitFile(data);
  };
  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <section className={`section m-horizontal ${styles.section}`}>
      <h2 className={`section-title ${styles.section_title}`}>
        <span className={`gradient-text`}>Join the Team</span>
      </h2>
      <File_Form
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
            hasSubmitted={hasSubmitted}
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
          hasSubmitted={hasSubmitted}
        />
        <Input
          isValid={urlValidator(data.linkedin_url)}
          _id="linkedin_url"
          label="LinkedIn URL"
          onChange={handleChange}
          placeholder="Linkedin URL"
          name="linkedin_url"
          type="text"
          hasSubmitted={hasSubmitted}
        />

        <Input
          isValid={data.positions.length > 2}
          _id="positions"
          label="What position would you like to work as?"
          onChange={handleChange}
          placeholder="Type position(s) here"
          name="positions"
          type="text"
          hasSubmitted={hasSubmitted}
        />
        <div className={styles.upload_container}>
          <div>
            <div className={styles.upload}>
              <DottedBorder>
                <label htmlFor="resume" className={styles.file_label}>
                  <input
                    id="resume"
                    type="file"
                    name="resume"
                    accept="application/doc, application/docx, application/pdf"
                    onChange={(e) =>
                      setData((prevState) => ({
                        ...prevState,
                        resume: e.target.files[0],
                      }))
                    }
                  />
                  <Image src={Upload1} alt="Upload" width={20} height={20} />
                  <p className="text-regular">Upload Resume</p>
                  {hasSubmitted && !data.resume && (
                    <span className={styles.file_error}>
                      <Image
                        src={Incorrect}
                        alt="Incorrect"
                        width={35}
                        height={35}
                      />
                    </span>
                  )}
                </label>
              </DottedBorder>
            </div>
            <br />
            {!!data.resume && (
              <div className={styles.file_name}>
                <p className="text-regular">
                  {data.resume?.name.substring(0, 15)}...
                </p>
                <span
                  className="gradient-text"
                  onClick={() =>
                    setData((prevState) => ({
                      ...prevState,
                      resume: undefined,
                    }))
                  }
                >
                  X
                </span>
              </div>
            )}
          </div>
          <div>
            <div className={styles.upload}>
              <DottedBorder>
                <label htmlFor="coverLetter" className={styles.file_label}>
                  <input
                    id="coverLetter"
                    type="file"
                    name="coverLetter"
                    accept="application/doc, application/docx, application/pdf"
                    onChange={(e) =>
                      setData((prevState) => ({
                        ...prevState,
                        coverLetter: e.target.files[0],
                      }))
                    }
                  />
                  <Image src={Upload2} alt="Upload" width={20} height={20} />
                  <p className="text-regular">Upload Cover Letter</p>
                  {hasSubmitted && !data.coverLetter && (
                    <span className={styles.file_error}>
                      <Image
                        src={Incorrect}
                        alt="Incorrect"
                        width={35}
                        height={35}
                      />
                    </span>
                  )}
                </label>
              </DottedBorder>
            </div>
            <br />
            {!!data.coverLetter && (
              <div className={styles.file_name}>
                <p className="text-regular">
                  {data.coverLetter?.name.substring(0, 15)}...
                </p>
                <span
                  className="gradient-text"
                  onClick={() =>
                    setData((prevState) => ({
                      ...prevState,
                      coverLetter: undefined,
                    }))
                  }
                >
                  X
                </span>
              </div>
            )}
          </div>
        </div>
        <br />
      </File_Form>
    </section>
  );
};

export default JoinTeam;
