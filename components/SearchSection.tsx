import React from 'react';
import Button from './Button';
import Heading from './Heading';
import styles from './styles/SearchSection.module.css';

export default function SearchSection() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.heading}>
        <Heading text="Find your next destination" justify="center" />
      </div>
      <div className={styles.input}>
        <input type="text" placeholder="search here..."></input>
        <button></button>
      </div>
      <div className={styles.buttons}>
        <Button text="Advanced" />
        <Button text="Lucky Dip" />
      </div>
    </div>
  );
}
