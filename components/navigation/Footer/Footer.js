import Image from 'next/image';
import Link from 'next/link';

import HorizontalLine from '../../UI/HorizontalLine/HorizontalLine';

import logo from '../../../public/img/brand/logo.png';
import youtubeIcon from '../../../public/img/icons/youtube.svg';
import linkedinIcon from '../../../public/img/icons/linkedin.svg';
import instagramIcon from '../../../public/img/icons/instagram.svg';
import tiktokIcon from '../../../public/img/icons/tiktok.svg';
import facebookIcon from '../../../public/img/icons/facebook.svg';
import styles from './Footer.module.css';

const LINKS = [
  { name: 'Creators', route: '/creators' },
  { name: 'Corporate', route: '/corporate' },
  { name: 'Translators', route: '/translators' },
  { name: 'BillC96', route: '/bill-c96' },
  { name: 'About', route: '/about' },
  // { name: 'Blog', route: '/blog' },
];

const SocialMediaLinks = [
  {
    href: 'https://www.instagram.com/aviewint/',
    icon: instagramIcon,
    alt: 'Instagram icon',
  },
  {
    href: 'https://www.linkedin.com/company/aview-international',
    icon: linkedinIcon,
    alt: 'LinkedIn icon',
  },
  {
    href: 'https://youtube.com/channel/UCjBLxbcY1w0qn8UGiMR2n6w',
    icon: youtubeIcon,
    alt: 'YouTube icon',
  },
  {
    href: 'https://www.tiktok.com',
    icon: tiktokIcon,
    alt: 'Tiktok icon',
  },
  {
    href: 'https://www.facebook.com/aviewinternational',
    icon: facebookIcon,
    alt: 'Facebook icon',
  },
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
 * @author Andrew Qiao & Victor Ogunjobi
 */
function FooterLogos() {
  return (
    <div className={styles.logos}>
      <div className={styles.logo}>
        <Image src={logo} alt="AVIEW logo" />
      </div>
      <div className={styles.socials}>
        {SocialMediaLinks.map((link, i) => (
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={styles.social}
            key={`social-link-${i}`}
          >
            <Image src={link.icon} alt={link.alt} />
          </a>
        ))}
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
