/**
 * Container for Want To Go Global? section of homepage
 */
import { useState } from 'react';

import GradientFullWidth from '../../../../components/layout/GradientFullWidth/GradientFullWidth';
import Form from '../../../../components/form/Form/Form';
import Input from '../../../form/Input/Input';

import { submitForm } from '../../../../utils/submit-form';
import styles from './GoGlobal.module.css';

function GoGlobal() {
  const [formState, setFormState] = useState({
    email: '',
    valid: false,
  });
  const [inputsValid, setInputsValid] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [switchContent, setSwitchContent] = useState(false);

  function changeHandler(e) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      setFormState({ email: e.target.value, valid: true });
      setInputsValid(true);
    } else {
      setFormState({ email: e.target.value, valid: false });
      setInputsValid(false);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    setHasSubmitted(true);
    if (formState.valid) {
      submitForm('newsletter-submission', { email: formState.email });
      setSwitchContent(true);
    }
  }

  return (
    <section className={`section ${styles.section}`}>
      <GradientFullWidth>
        {!switchContent ? (
          <>
            <h2 className={`section-title ${styles['section-title']}`}>
              Want to Go Global?
            </h2>
            <p
              className={`section-description ${styles['section-description']}`}
            >
              Give us your email. We will do the rest.
            </p>
            <Form
              name="newsletter-submission"
              buttonText="Subscribe"
              buttonType="tertiary"
              submitHandler={submitHandler}
            >
              <Input
                type="email"
                placeholder="Your email address"
                bgColor="light"
                changeHandler={changeHandler}
                value={formState.email}
                valid={inputsValid}
                hasSubmitted={hasSubmitted}
                name="email"
                incorrectText="Please submit a properly formatted email."
                required={'true'}
              />
              <p className={`text-regular ${styles.agreement}`}>
                By signing up you agree to receive communications via email. For
                more information please refer to our Privacy Policy.
              </p>
            </Form>
          </>
        ) : (
          <h2 className={`section-title`}>
            You&apos;ve subscribed to our newsletter!
          </h2>
        )}
      </GradientFullWidth>
    </section>
  );
}

export default GoGlobal;
