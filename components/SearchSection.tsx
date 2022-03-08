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
          <div className={styles.tooltip}>
            <input id="input-text" className={styles.tooltip} type="text" placeholder="Search for holiday type..." onChange={handleChange}></input> 
            <br/>  
            <span className={styles.tooltiptext} >
              <p>[￡:pound] [👨‍👩‍👧‍👦:family] [🚶‍♀️:solo] [💆:city break] [👫:romance] [👢Shopping] [🌞:sun] [🌝:honeymoon] [💃🕺🏻:night life] [🧗🏼‍♀️:adventure] [⛺️:backpacking]</p>
            </span>
        </div>
       
        <button></button>
        
        </form> 
      </div>
      <div className={styles.buttons}>
        {/* <p>￡:pound,👨‍👩‍👧‍👦:family,🚶‍♀️:solo,💆:city break,</p>
        <p>👫:romance,👢Shopping,🌞:sun,🌝:honeymoon,💃🕺🏻:night life</p> */}
       <Button text="Lucky Dip" luckyDip={luckyDip}/>
      </div>
    </div>
  );
}
