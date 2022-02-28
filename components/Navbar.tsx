import Image from 'next/image';
import styles from './styles/Navbar.module.css';
import { images } from '../lib/images'
import { useMediaQuery } from 'react-responsive';

function Navbar() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <header className={styles.header}>
      <div className={styles.headerNav}>
        <div className={styles.logo}>
          {/* {isMobile ? <></> : } */}
          <Image src={images.logo} alt="Beyonderbound" height={76} width={479} />
        </div>
        <nav className={styles.nav}>Nav</nav>
      </div>
    </header>
  );
}

export default Navbar;

