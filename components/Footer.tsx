import React, { useState, useEffect } from 'react';
import styles from './styles/Footer.module.css';

function Footer() {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    function getCurrentYear() {
      const date = new Date();
      setYear(date.getFullYear());
    }

    getCurrentYear();
  }, []);

  return (
    <footer className={styles.footer}>
      <p>All rights reserved &#169; {year}</p>
    </footer>
  );
}

export default Footer;
