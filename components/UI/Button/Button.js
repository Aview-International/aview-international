import Link from "next/link";

import Shadow from "../Shadow/Shadow";

import styles from "./Button.module.css";

function Button({ type, isRoute, link, children }) {
  return isRoute ? (
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
