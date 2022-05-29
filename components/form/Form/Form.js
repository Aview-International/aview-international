import styles from "./Form.module.css";

/**
 * Container for forms
 *
 * @prop name: Name of the form
 * @prop children: Form elements
 */
function Form({ name, children }) {
  return (
    <form
      name={name}
      method="POST"
      className={styles.form}
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <div className={styles.hidden}>
        <label>
          Don&apos;t fill this out if you&apos;re human:
          <input name="bot-field" />
        </label>
      </div>
      {children}
    </form>
  );
}

export default Form;
