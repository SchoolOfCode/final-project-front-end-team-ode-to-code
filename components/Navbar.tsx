import Image from 'next/image';
import styles from './styles/Navbar.module.css';
import React, { useState } from 'react';
import RightNav from './RightNav';

const logo =
  'https://ik.imagekit.io/wletmmv9huf/beyonderbound_6sCbv4RPO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645615669388';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(true);

  return (
    <header className={styles.header}>
      <div className={styles.headerNav}>
        <div className={styles.logo}>
          <Image src={logo} alt="Beyonderbound" height={76} width={479} />
        </div>
        <div className={styles.hamburgerContainer}>
          <nav
            onClick={() => setNavbarOpen(!navbarOpen)}
            className={styles.hamburger}
          ></nav>
          {/*  {navbarOpen && <RightNav />} */}
          {!navbarOpen ? <RightNav /> : <></>}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
