import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import Button from '../../UI/Button/Button';

import logo from '../../../public/img/brand/logo.png';
import closeIcon from '../../../public/img/icons/close.svg';
import styles from './Navbar.module.css';
import Border from '../../UI/Border/Border';
import Arrow from '../../../public/img/icons/dropdown-arrow.svg';
import GradientArrow from '../../../public/img/icons/gradient-arrow.svg';
import Shadow from '../../UI/Shadow/Shadow';

const PAGES = [
  { name: 'Home', route: '/' },
  { name: 'Translators', route: '/translators' },
  { name: 'Creators', route: '/creators' },
  { name: 'About', route: '/about' },
  { name: 'Blog', route: '/blog' },
];

const DropdownLinksArray = [
  {
    name: 'Corporate',
    route: '/corporate',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'BillC96',
    route: '/bill-c96',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
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
        {PAGES.slice(0, 3).map((page, i) => (
          <NavbarLink key={`page-${i}`} {...page} closeMenu={closeMenu} />
        ))}
        <DropdownLinks closeMenu={closeMenu} />
        {PAGES.slice(3).map((page, i) => (
          <NavbarLink key={`page-${i}`} {...page} closeMenu={closeMenu} />
        ))}
      </ul>
    </nav>
  );
}

/**
 * Dropdown links in navbar
 * @prop: closeMenu: function that closes the side bar
 * @author Victor Ogunjobi
 */
const DropdownLinks = ({ closeMenu }) => {
  let { pathname } = useRouter();
  const [hover, setHover] = useState(false);
  return (
    <li
      className={`${styles['dropdown-container']}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span
        className={
          hover || pathname === '/corporate' || pathname === '/bill-c96'
            ? `gradient-text`
            : ''
        }
      >
        Corporate
      </span>
      <span className={styles['dropdown-arrow']}>
        <Image
          src={
            hover || pathname === '/corporate' || pathname === '/bill-c96'
              ? GradientArrow
              : Arrow
          }
          alt=""
          layout="responsive"
        />
      </span>
      <div>
        <Border borderRadius={'5px'}>
          <Shadow />
          <div className={styles['dropdown-links']}>
            {DropdownLinksArray.map((page, i) => (
              <div key={`dropdown-link-${i}`} onClick={closeMenu}>
                <Link href={page.route}>
                  <a className={`hover-gradient-text ${styles['navbar-link']}`}>
                    {page.name}
                  </a>
                </Link>
                <p>{page.description}</p>
              </div>
            ))}
          </div>
        </Border>
      </div>
    </li>
  );
};

/**
 * Single link in navbar
 * Seperated from the above component to enable gradient text on hover
 * @author Victor Ogunjobi
 */
const NavbarLink = ({ name, route, closeMenu }) => {
  let { pathname } = useRouter();
  return (
    <li
      className={`hover-gradient-text  ${
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
