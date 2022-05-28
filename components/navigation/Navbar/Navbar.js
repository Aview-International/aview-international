import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Button from "../../UI/Button/Button";

import logo from "../../../public/img/brand/nav-logo.svg";
import closeIcon from "../../../public/img/icons/close.svg";
import styles from "./Navbar.module.css";

const pages = [
  { name: "Home", route: "/" },
  { name: "Creators", route: "/creators" },
  { name: "Translators", route: "/translators" },
  { name: "About", route: "/about" },
];

/**
 * Top navbar
 */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function menuButtonHandler() {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }

  return (
    <header className={styles.header}>
      <NavbarLogo />
      <NavbarLinks menuOpen={menuOpen} />
      <ContactButton />
      <MenuButton menuButtonHandler={menuButtonHandler} />
      <CloseButton menuOpen={menuOpen} menuButtonHandler={menuButtonHandler} />
    </header>
  );
}

/**
 * AVIEW logo on left side of Navbar
 */
function NavbarLogo() {
  return (
    <Link href="/">
      <a className={styles.logo}>
        <Image src={logo} alt="AVIEW logo" />
      </a>
    </Link>
  );
}

/**
 * Page links in navbar
 */
function NavbarLinks({ menuOpen }) {
  return (
    <nav className={`${styles.navbar} ${menuOpen && styles["navbar-open"]}`}>
      <ul className={styles["navbar-links"]}>
        {pages.map((page, i) => (
          <li key={`page-${i}`}>
            <Link href={page.route}>
              <a className={styles["navbar-link"]}>{page.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * Contact Us button on right side of desktop navbar
 */
function ContactButton() {
  return (
    <div className="navbar-desktop-only">
      <Button type="secondary" isRoute={false} link="#generate-aview">
        Contact Us
      </Button>
    </div>
  );
}

/**
 * Menu button on right side of mobile navbar
 */
function MenuButton({ menuButtonHandler }) {
  return (
    <div className={styles["menu-btn"]} onClick={menuButtonHandler}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

/**
 * Close button on top right of open mobile menu
 */
function CloseButton({ menuOpen, menuButtonHandler }) {
  return (
    <div
      className={`${styles["close-btn"]} ${
        menuOpen && styles["close-btn-open"]
      }`}
      onClick={menuButtonHandler}
    >
      <Image src={closeIcon} alt="Close icon" />
    </div>
  );
}

export default Navbar;
