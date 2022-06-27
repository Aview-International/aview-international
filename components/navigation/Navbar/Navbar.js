import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import Button from '../../UI/Button/Button';

import logo from '../../../public/img/brand/nav-logo.svg';
import closeIcon from '../../../public/img/icons/close.svg';
import styles from './Navbar.module.css';

const PAGES = [
  { name: 'Home', route: '/' },
  { name: 'Creators', route: '/creators' },
  { name: 'Translators', route: '/translators' },
  { name: 'About', route: '/about' },
];

/**
 * Top navbar
 *
 * @author Andrew Qiao
 */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function menuButtonHandler() {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    window.addEventListener('resize', closeMenu);
  }, []);

  return (
    <header className={styles.header}>
      <NavbarLogo />
      <NavbarLinks menuOpen={menuOpen} closeMenu={closeMenu} />
      <ContactButton />
      <MenuButton menuButtonHandler={menuButtonHandler} />
      <CloseButton menuOpen={menuOpen} menuButtonHandler={menuButtonHandler} />
    </header>
  );
}

/**
 * AVIEW logo on left side of Navbar
 *
 * @author Andrew Qiao
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
 *
 * @author Andrew Qiao
 */
function NavbarLinks({ menuOpen, closeMenu }) {
  return (
    <nav className={`${styles.navbar} ${menuOpen && styles['navbar-open']}`}>
      <ul className={styles['navbar-links']}>
        {PAGES.map((page, i) => (
          <NavbarLink key={`page-${i}`} {...page} closeMenu={closeMenu} />
        ))}
      </ul>
    </nav>
  );
}

/**
 * Single link in navbar
 * Seperated from the above component to enable gradient text on hover
 * @author Victor Ogunjobi
 */
const NavbarLink = ({ name, route, closeMenu }) => {
  let { pathname } = useRouter();
  const [hover, setHover] = useState(false);
  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${hover ? 'gradient-text' : ''}  ${
        pathname === route ? `gradient-text` : ''
      }`}
      onClick={closeMenu}
    >
      <Link href={route}>
        <a className={styles['navbar-link']}>{name}</a>
      </Link>
    </li>
  );
};

/**
 * Contact Us button on right side of desktop navbar
 *
 * @author Andrew Qiao
 */
function ContactButton() {
  return (
    <div className="desktop-only">
      <Button type="secondary" isRoute={true} link="/#generate-aview">
        Contact Us
      </Button>
    </div>
  );
}

/**
 * Menu button on right side of mobile navbar
 *
 * @author Andrew Qiao
 */
function MenuButton({ menuButtonHandler }) {
  return (
    <div className={styles['menu-btn']} onClick={menuButtonHandler}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

/**
 * Close button on top right of open mobile menu
 *
 * @author Andrew Qiao
 */
function CloseButton({ menuOpen, menuButtonHandler }) {
  return (
    <div
      className={`${styles['close-btn']} ${
        menuOpen && styles['close-btn-open']
      }`}
      onClick={menuButtonHandler}
    >
      <Image src={closeIcon} alt="Close icon" />
    </div>
  );
}

export default Navbar;
