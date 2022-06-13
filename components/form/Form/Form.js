import { useState } from 'react';

import Button from '../../UI/Button/Button';

import styles from './Form.module.css';

/**
 * Container for forms
 *
 * @prop name: Name of the form
 * @prop formState: State containing form inputs
 * @prop children: Form input elements
 */
function Form({ name, buttonText, buttonType, children }) {
  return (
    <form
      name={name}
      method="POST"
      className={styles.form}
      autoComplete="on"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/success"
    >
      <div className={styles.hidden}>
        <label>
          Don&apos;t fill this out if you&apos;re human:
          <input name="bot-field" />
        </label>
      </div>
      {children}
      <Button type={buttonType} isSubmit={true}>
        {buttonText}
      </Button>
    </form>
  );
}

export default Form;

export const File_Form = ({ name, buttonText, buttonType, children }) => {
  return (
    <form
      name={name}
      method="POST"
      encType="multipart/form-data"
      className={styles.form}
      autoComplete="on"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/success"
    >
      <div className={styles.hidden}>
        <label>
          Don&apos;t fill this out if you&apos;re human:
          <input name="bot-field" />
        </label>
      </div>
      {children}
      <Button type={buttonType} isSubmit={true}>
        {buttonText}
      </Button>
    </form>
  );
};
