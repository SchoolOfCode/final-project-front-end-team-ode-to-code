import Image from 'next/image';
import styles from './styles/Navbar.module.css';
import logo from '../public/beyonderbound.png';
import beachImg from '../public/beach1.png';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.beach}>
        <Image src={beachImg} alt="beach" className={styles.clip} />
      </div>
      <div className={styles.headerNav}>
        <div className={styles.logo}>
          <Image src={logo} alt="Beyonderbound" placeholder="blur" />
        </div>
        <nav className={styles.nav}>Nav</nav>
      </div>
    </header>
  );
}

export default Navbar;
