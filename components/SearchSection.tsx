import React from 'react';
import Button from './Button';
import Heading from './Heading';
import styles from './styles/SearchSection.module.css';
import Link from 'next/link';

export default function SearchSection({handleChange,handleSubmit,luckyDip}:any) {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.heading}>
        <Heading text="Find your next destination" justify="center" />
      </div>
      <div className={styles.input}>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for holiday type..." onChange={handleChange}></input>
        <button></button>
        </form> 
      </div>
      <div className={styles.buttons}>
        <Button text="Advanced" luckyDip={luckyDip}/>
       <Button text="Lucky Dip" luckyDip={luckyDip}/>
      </div>
    </div>
  );
}
