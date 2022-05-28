import Link from "next/link";

import styles from "./Button.module.css";

function Button({ type, isRoute, link, children }) {
  return isRoute ? (
    <Link href={link}>
      <a className={styles[`btn-${type}`]}>{children}</a>
    </Link>
  ) : (
    <a href={link} className={styles[`btn-${type}`]}>
      {children}
    </a>
  );
}

export default Button;
