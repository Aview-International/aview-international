import { useState } from 'react';
import { emailValidator, urlValidator } from '../../../../utils/regex';
import Incorrect from '../../../../public/img/icons/incorrect.svg';
import { File_Form } from '../../../form/Form/Form';
import Input from '../../../UI/Input/Input';
import styles from './ApplyToday.module.css';
import Image from 'next/image';
import { submitFile } from '../../../../utils/submit-form';
import DottedBorder from '../../../UI/DottedBorder/DottedBorder';
import Upload1 from '../../../../public/img/icons/uploadIcon1.svg';
import Upload2 from '../../../../public/img/icons/uploadIcon2.svg';
import Select from '../../../form/Select/Select';

const JoinTeam = () => {
  const [data, setData] = useState({
    'form-name': 'team-application',
    name: '',
    email: '',
    languages: '',
    'voice_acting/dubbing': '',
    position: '',
    resume: '',
    coverLetter: '',
  });
  const [valid, setValid] = useState(true);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const inputArray = [
    {
      _id: 'name',
      label: 'Name',
      placeholder: 'Your name',
      name: 'name',
      type: 'text',
      validator: (value) => value.length > 1,
    },
    {
      _id: 'email',
      label: 'Email Address',
      placeholder: 'Your email address',
      name: 'email',
      type: 'email',
      validator: (value) => emailValidator(value),
    },
    {
      _id: 'position',
      label: 'Which languages can you translate?',
      placeholder: 'Type language(s) here',
      name: 'position',
      type: 'text',
      validator: (value) => value.length > 2,
    },
  ];
  const selectArray = [
    ['Yes', 'No'],
    ['Translator', 'Dubber', 'Video Editor'],
  ];
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
        data.position &&
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
        <span className={`gradient-text`}>Apply Now!</span>
      </h2>
      <File_Form
        name="team-application"
        buttonText="Send Message"
        buttonType="primary"
        submitHandler={submitHandler}
      >
        {inputArray.map((item, i) => (
          <Input
            onChange={handleChange}
            hasSubmitted={hasSubmitted}
            key={`input_${i}`}
            isValid={item.validator(data[item.name])}
            {...item}
          />
        ))}
        <div className={styles.selects}>
          <Select
            options={selectArray[0]}
            label="Can you do voice acting/dubbing?"
            handleClick={(index) =>
              setData({
                'voice_acting/dubbing': selectArray[0][index],
              })
            }
          />
          <Select
            options={selectArray[1]}
            label="What position are you applying to?"
            handleClick={(index) =>
              setData({
                position: selectArray[1][index],
              })
            }
          />
        </div>
        <div className={styles.upload_container}>
          <div>
            <div className={styles.upload}>
              <DottedBorder>
                <label htmlFor="file_upload" className={styles.file_label}>
                  <input
                    id="file_upload"
                    type="file"
                    name="file"
                    accept="application/doc, application/docx, application/pdf"
                    onChange={(e) =>
                      setData((prevState) => ({
                        ...prevState,
                        file: e.target.files[0],
                      }))
                    }
                  />
                  <Image src={Upload1} alt="Upload" width={20} height={20} />
                  <p className="text-regular">Upload Resume</p>
                  {hasSubmitted && !data.file && (
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
            {!!data.file && (
              <div className={styles.file_name}>
                <p className="text-regular">{data.file?.name}</p>
                <span
                  className="gradient-text"
                  onClick={() =>
                    setData((prevState) => ({
                      ...prevState,
                      file: undefined,
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
                <label htmlFor="file_upload" className={styles.file_label}>
                  <input
                    id="file_upload"
                    type="file"
                    name="file"
                    accept="application/doc, application/docx, application/pdf"
                    onChange={(e) =>
                      setData((prevState) => ({
                        ...prevState,
                        file: e.target.files[0],
                      }))
                    }
                  />
                  <Image src={Upload2} alt="Upload" width={20} height={20} />
                  <p className="text-regular">Upload Cover Letter</p>
                  {hasSubmitted && !data.file && (
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
            {!!data.file && (
              <div className={styles.file_name}>
                <p className="text-regular">{data.file?.name}</p>
                <span
                  className="gradient-text"
                  onClick={() =>
                    setData((prevState) => ({
                      ...prevState,
                      file: undefined,
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
