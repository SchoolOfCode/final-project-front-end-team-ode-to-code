import Image from 'next/image';
import styles from './styles/Navbar.module.css';
import Link from 'next/link';
import { images } from '../lib/images';

function Navbar() {
  return (
    <header>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image
              src={images.logo}
              alt="Beyonderbound"
              height={76}
              width={479}
            />
          </a>
        </Link>
      </div>
      <div className={styles.hamburgerContainer}>
        <nav>
          <p>nav</p>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
