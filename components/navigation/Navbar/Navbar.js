import Image from "next/image";
import Link from "next/link";

/**
 * Top navbar
 */
function Navbar() {
  return (
    <header>
      <Link href="/">
        <Image class="logo" alt="Aview logo" src="img/logo.svg" />
      </Link>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Creators</a>
          </li>
          <li>
            <a href="#">Translators</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <a href="#generate-aview">Contact Us</a>
      <MenuButton />
      <div id="close-btn">
        <Image src="img/close-icon.svg" alt="Close icon" />
      </div>
    </header>
  );
}

export default Navbar;

function MenuButton() {
  return (
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
