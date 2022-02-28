import React from 'react';
import Link from 'next/link';
import styles from './styles/RightNav.module.css';

export default function RightNav() {
  return (
    <nav className={styles.sideNav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
}

/* div className="logo">
        <h1>App Name</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link> */
