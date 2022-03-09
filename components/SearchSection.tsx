import React from 'react';
import Button from './Button';
import Heading from './Heading';
import styles from './styles/SearchSection.module.css';
import Link from 'next/link';
import AdvancedSearch from './AdvancedSearch';
import { useState } from 'react';

export default function SearchSection({
  handleChange,
  handleSubmit,
  luckyDip,
}: any) {
  const [toggle, setToggle] = useState<boolean>(false);

  function toggler() {
    setToggle(!toggle);
  }

  return (
    <div className={styles.searchContainer}>
      <div className={styles.heading}>
        <Heading text="Find your next destination" justify="center" />
      </div>
      <div className={styles.input}>
        {!toggle && (
          <form onSubmit={handleSubmit}>
            <div className={styles.tooltip}>
              <input
                id="input-text"
                className={styles.tooltip}
                type="text"
                placeholder="Search for holiday type..."
                onChange={handleChange}
              ></input>
              <br />
              <span className={styles.tooltiptext}>
                <p>
                  [￡:pound] [👨‍👩‍👧‍👦:family] [🚶‍♀️:solo] [💆:city break] [👫:romance]
                  [👢Shopping] [🌞:sun] [🌝:honeymoon] [💃🕺🏻:night life]
                </p>
              </span>
            </div>

            <button></button>
          </form>
        )}
      </div>
      <div className={styles.buttons}>
        <Button text="Advanced" action={toggler} />
        <Button text="Lucky Dip" action={luckyDip} />
        {toggle && (
          <div className="dropdown">
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
                <Button text="Continent" />
                <div className="continent-dropdown-content">
                  <Button text="Europe" />
                  <Button text="North America" />
                  <Button text="South America" />
                  <Button text="Africa" />
                  <Button text="Australia" />
                  <Button text="Asia" />
                </div>
                <Button text="Search" />
              </div>
            </div>
          </div>
        )}
        {/* <AdvancedSearch /> */}
      </div>
    </div>
  );
}
