import Image from 'next/image';
import styles from './styles/Navbar.module.css';
import React, { useState } from 'react';
import RightNav from './RightNav';
import Link from 'next/link';
import { images } from '../lib/images'

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
    
  return (
    <header>
          <div className={styles.logo}><Link href="/">
            <a>
              <Image src={images.logo} alt="Beyonderbound" height={76} width={479} />
              </a>
          </Link></div>
          <div className={styles.hamburgerContainer}>
          <nav
            onClick={() => setNavbarOpen(!navbarOpen)}
            className={styles.hamburger}
          ></nav>
          {/*  {navbarOpen && <RightNav />} */}
          {navbarOpen ? <RightNav /> : <></>}
        </div>
        </header>
  );
}

export default Navbar;

