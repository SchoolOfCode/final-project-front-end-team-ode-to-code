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
              <p>[￡:pound] [👨‍👩‍👧‍👦:family] [🚶‍♀️:solo] [💆:city break] [👫:romance] [👢Shopping] [🌞:sun] [🌝:honeymoon] [💃🕺🏻:night life]</p>
            </span>
        </div>
       
        <button></button>
        
        </form> 
      </div>
      <div className={styles.buttons}>
        {/* <p>￡:pound,👨‍👩‍👧‍👦:family,🚶‍♀️:solo,💆:city break,</p>
        <p>👫:romance,👢Shopping,🌞:sun,🌝:honeymoon,💃🕺🏻:night life</p> */}
        
        <div className="dropdown">
          <button className={styles.dropdownButton}>Advanced</button>
            <div className="advanced-dropdown-content">
              <div className="holiday-type-dropdown">
                <button className={styles.buttons}>Holiday Type</button>
                  <div className="holiday-type-dropdown-content">
                    <button className={styles.buttons}>Sun Holiday</button>
                    <button className={styles.buttons}>City Break</button>
                    <button className={styles.buttons}>Adventure</button>
                    <button className={styles.buttons}>Wintry Holiday</button>
                  </div>
              </div>
    <a href="#">Budget</a>
    <a href="#">Rating</a>
    <div className="continent-dropdown">
                <Button text="Continent"/>
                  <div className="continent-dropdown-content">
                    <Button text="Europe"/>
                    <Button text="North America"/>
                    <Button text="South America"/>
                    <Button text="Africa"/>
                    <Button text="Australia"/>
                    <Button text="Asia"/>
                  </div>
              </div>
  </div>
</div>
       <Button text="Lucky Dip" luckyDip={luckyDip}/>
      </div>
    </div>
  );
}
