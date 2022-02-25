import Image from 'next/image';
import styles from './styles/Navbar.module.css';
import { images } from '../lib/images'

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.headerNav}>
        <div className={styles.logo}>
          <Image src={images.logo} alt="Beyonderbound" height={76} width={479} />
        </div>
        <nav className={styles.nav}>Nav</nav>
      </div>
    </header>
  );
}

export default Navbar;

