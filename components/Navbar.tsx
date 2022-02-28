import styles from './styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '../lib/images';

function Navbar() {
  return (
    <header>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <h1>
              be<span>yonder</span>bound
            </h1>
          </a>
        </Link>
      </div>
      <nav>
        <div className={styles.menuToggle}>
          {/* A fake / hidden checkbox is used as click reciever,
          so you can use the :checked selector on it. */}

          <input type="checkbox" />

          {/* Some spans to act as a hamburger.
    
          They are acting like a real hamburger,
          not that McDonalds stuff. */}
          <span></span>
          <span></span>
          <span></span>

          {/* Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic. */}
          <ul className={styles.menu}>
            <li>Home</li>
            <li>About</li>
            <li>Info</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
