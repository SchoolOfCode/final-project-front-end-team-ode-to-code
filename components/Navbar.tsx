import Image from 'next/image';
import styles from './styles/Navbar.module.css';
import React, { useState } from 'react';
import RightNav from './RightNav';
import Link from 'next/link';
import { images } from '../lib/images'

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
    
  return (
          <Link href="/">
            <div className={styles.logo}><a>
              <Image src={images.logo} alt="Beyonderbound" height={76} width={479} />
              </a></div>
          </Link>
        </div>
        <div className={styles.hamburgerContainer}>
          <nav
            onClick={() => setNavbarOpen(!navbarOpen)}
            className={styles.hamburger}
          ></nav>
          {/*  {navbarOpen && <RightNav />} */}
          {navbarOpen ? <RightNav /> : <></>}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

