import { useState } from 'react';

import GradientFullWidth from '../../../../components/layout/GradientFullWidth/GradientFullWidth';
import Form from '../../../../components/form/Form/Form';
import Input from '../../../form/Input/Input';

import { submitForm } from '../../../../utils/submit-form';
import styles from './GoGlobal.module.css';

/**
 * Container for Want To Go Global? section of homepage
 */
function GoGlobal() {
  const [formState, setFormState] = useState({
    email: '',
    valid: true,
  });
  const [inputsValid, setInputsValid] = useState([false]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function changeHandler(e) {
    console.log(e.target.value);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      setFormState({ email: e.target.value, valid: true });
      setInputsValid([true]);
    } else {
      setFormState({ email: e.target.value, valid: false });
      setInputsValid([false]);
    }
  }

  function submitHandler(e) {
    e.preventDefault();

    
    if (formState.valid) {
      submitForm('newsletter', { email: formState.email });
      setHasSubmitted(true);
    }
  }

  return (
    <section className={`section`}>
      <GradientFullWidth>
        {!hasSubmitted ? (
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
              name="newsletter"
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
                valid={inputsValid[0]}
                hasSubmitted={hasSubmitted}
                incorrectText="Please submit a properly formatted email."
              />
              <p className={styles.agreement}>
                By signing up you agree to receive communications via email. For
                more information please refer to our Privacy Policy.
              </p>
            </Form>
          </>
        ) : (
          <h2 className={`section-title ${styles['section-title']}`}>
            You’ve subscribed to our newsletter!
          </h2>
        )}
      </GradientFullWidth>
    </section>
  );
}

export default GoGlobal;
