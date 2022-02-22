import Image from 'next/image';
import styles from './styles/Navbar.module.css';
import logo from '../public/beyonderbound.png';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="Beyonderbound" placeholder="blur" />
      </div>
      <nav className={styles.nav}>Nav</nav>
    </header>
  );
}

export default Navbar;
