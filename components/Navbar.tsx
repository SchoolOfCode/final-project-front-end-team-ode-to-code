import Image from 'next/image';
import styles from './styles/Navbar.module.css';

const beachImg =
  'https://ik.imagekit.io/wletmmv9huf/beach1_tso8BrGOJG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645614950170';
const logo =
  'https://ik.imagekit.io/wletmmv9huf/beyonderbound_6sCbv4RPO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645615669388';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.beach}>
        <Image
          src={beachImg}
          alt="beach"
          className={styles.clip}
          height={600}
          width={4261}
        />
      </div>
      <div className={styles.headerNav}>
        <div className={styles.logo}>
          <Image src={logo} alt="Beyonderbound" height={76} width={479} />
        </div>
        <nav className={styles.nav}>Nav</nav>
      </div>
    </header>
  );
}

export default Navbar;
