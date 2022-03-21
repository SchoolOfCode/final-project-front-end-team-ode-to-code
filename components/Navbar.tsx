import styles from './styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '../lib/images';

function Navbar(): JSX.Element {
  return (
    <header>
      <div className={styles.identity}>
        <Link href="/">
          {/* <a data-cy="team-logo"> */}
          <div className={styles.bar}>
            <div className={styles.flex}>
              <div className={styles.flexItem}>
                <Image
                  src={images.globe}
                  alt="header image"
                  className={styles.globe}
                  height={40}
                  width={40}
                />
              </div>
              <div className={styles.flexItem}>
                <h1 data-cy="team-logo" className={styles.beyonderbound}>
                  be<span className={styles.span}>yonder</span>bound
                </h1>
              </div>
            </div>
          </div>
          {/* </a> */}
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
            <li>
              <Link href="/">
                <a data-cy="home">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a data-cy="about-link">About us</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
