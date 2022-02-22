import Image from 'next/image';
import styles from './styles/Navbar.module.css';
import logo from '../public/beyonderbound.png';
import beachImg from '../public/beach.png';

function Navbar() {
  return (
    <header>
      <div className={styles.beach}>
        <Image src={beachImg} className={styles.clip} />
      </div>
      <div className={styles.flex}>
        <div className={styles.logo}>
          <Image src={logo} alt="Beyonderbound" placeholder="blur" />
        </div>
        <nav className={styles.nav}>Nav</nav>
      </div>
    </header>
  );
}

export default Navbar;
