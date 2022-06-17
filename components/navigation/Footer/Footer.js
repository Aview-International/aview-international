import Image from 'next/image';
import Link from 'next/link';

import HorizontalLine from '../../UI/HorizontalLine/HorizontalLine';

import logo from '../../../public/img/brand/nav-logo.svg';
import youtubeIcon from '../../../public/img/icons/youtube.svg';
import linkedinIcon from '../../../public/img/icons/linkedin.svg';
import styles from './Footer.module.css';

const LINKS = [
  { name: 'Creators', route: '/creators' },
  { name: 'Translators', route: '/translators' },
  { name: 'About', route: '/about' },
  // { name: "Contact", route: "/contact" },
  // { name: "Careers", route: "/careers" },
];

/**
 * Footer
 *
 * @author Andrew Qiao
 */
function Footer() {
  return (
    <footer className={styles.footer}>
      <HorizontalLine />
      <div className={styles.content}>
        <FooterLogos />
        <FooterLinks />
      </div>
    </footer>
  );
}

/**
 * Logos on left side of footer
 *
 * @author Andrew Qiao
 */
function FooterLogos() {
  return (
    <div className={styles.logos}>
      <Image src={logo} alt="AVIEW logo" />
      <div className={styles.socials}>
        <a href="" className={styles.social}>
          <Image src={youtubeIcon} alt="YouTube icon" />
        </a>
        <a href="" className={styles.social}>
          <Image src={linkedinIcon} alt="LinkedIn icon" />
        </a>
      </div>
    </div>
  );
}

/**
 * Footer links
 */
function FooterLinks() {
  return (
    <ul className={styles['footer-links']}>
      {LINKS.map((link, i) => (
        <li key={`footer-link-${i}`}>
          <Link href={link.route}>
            <a className={styles['footer-link']}>{link.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Footer;
