import Image from 'next/image';
import Link from 'next/link';

import HorizontalLine from '../../UI/HorizontalLine/HorizontalLine';

import logo from '../../../public/img/brand/logo.png';
import youtubeIcon from '../../../public/img/icons/youtube.svg';
import linkedinIcon from '../../../public/img/icons/linkedin.svg';
import instagramIcon from '../../../public/img/icons/instagram.svg';
import styles from './Footer.module.css';

const LINKS = [
  { name: 'Creators', route: '/creators' },
  { name: 'Corporate', route: '/corporate' },
  { name: 'Translators', route: '/translators' },
  { name: 'BillC96', route: '/bill-c96' },
  { name: 'About', route: '/about' },
  { name: 'Blog', route: '/blog' },
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
      <div className={styles.logo}>
        <Image src={logo} alt="AVIEW logo" />
      </div>
      <div className={styles.socials}>
        {/* <a href="" className={styles.social}>
          <Image src={youtubeIcon} alt="YouTube icon" />
        </a> */}
        <a
          href="https://www.instagram.com/aviewint/"
          target="_blank"
          rel="noreferrer"
          className={styles.social}
        >
          <Image src={instagramIcon} alt="Instagram icon" />
        </a>
        <a
          href="https://www.linkedin.com/company/aview-international"
          target="_blank"
          rel="noreferrer"
          className={styles.social}
        >
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
        <li key={`footer-link-${i}`} className="hover-gradient-text">
          <Link href={link.route}>
            <a className={styles['footer-link']}>{link.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Footer;
