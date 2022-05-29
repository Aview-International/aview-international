import Link from "next/link";

import Shadow from "../Shadow/Shadow";

import styles from "./Button.module.css";

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
