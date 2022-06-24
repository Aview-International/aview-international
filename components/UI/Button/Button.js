import Link from 'next/link';

import Shadow from '../Shadow/Shadow';

import styles from './Button.module.css';

/**
 * Button component
 *
 * @prop type: Primary (gradient fill), secondary (gradient border, transparent fill), tertiary (white text and fill)
 * @prop isRoute: Whether the button is a route or an external link
 * @prop link: Where button links to
 * @prop isOnClick: Whether the button runs an function on click
 * @prop onClick: On click function that the button runs
 * @prop children: Text wrapped by button
 *
 * @author Andrew Qiao
 */
function Button({ type, link, isOnClick, onClick, children }) {
  return isOnClick ? (
    <button className={styles[`btn-${type}`]} href="#" onClick={onClick}>
      {children}
    </button>
  ) : (
    <Link href={link}>
      <a className={`${styles[`btn-${type}`]} shadow-parent`}>
        <Shadow />
        {children}
      </a>
    </Link>
  );
}

export default Button;
