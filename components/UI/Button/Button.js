import Link from "next/link";

import Shadow from "../Shadow/Shadow";

import styles from "./Button.module.css";

/**
 * Button
 *
 * @prop type: Primary (gradient fill), secondary (gradient border, transparent fill), tertiary (white text and fill)
 * @prop isRoute: Whether the button is a route or an external link
 * @prop isSubmit: Whether the button is a form button
 * @prop link: Where button links to
 * @prop children: Text wrapped by button
 *
 */
function Button({ type, isRoute, isSubmit, link, children }) {
  return isSubmit ? (
    <button type="submit" className={styles[`btn-${type}`]} href="#">
      {children}
    </button>
  ) : isRoute ? (
    <Link href={link}>
      <a className={styles[`btn-${type}`]}>
        <Shadow />
        {children}
      </a>
    </Link>
  ) : (
    <a href={link} className={`${styles[`btn-${type}`]} shadow-parent`}>
      <Shadow />
      {children}
    </a>
  );
}

export default Button;
