import React from 'react';
import Button from './Button';
import Heading from './Heading';
import styles from './styles/SearchSection.module.css';
import Link from 'next/link';
import { useState } from 'react';
import Router, { useRouter } from 'next/router';

export default function SearchSection({
  handleChange,
  handleSubmit,
  luckyDip,
}: any) {
  interface iAdvancedOptions {
    holiday_type: string;
    budget: string;
    rating: string;
    continent: string;
  }

  const [toggle, setToggle] = useState<boolean>(false);

  const [advancedOptions, setAdvancedOptions] = useState<iAdvancedOptions>({
    holiday_type: '',
    budget: '',
    rating: '',
    continent: '',
  });

  function toggler() {
    setToggle(!toggle);
  }

  function changeAdvancedCriteria(e: any) {
    const name = e.target.name;
    const value = e.target.value;
    setAdvancedOptions((advancedOptions) => ({
      ...advancedOptions,
      [name]: value,
    }));
  }

  function submitAdvancedCriteria(e: any) {
    e.preventDefault();
    const { holiday_type, budget, rating, continent } = advancedOptions;
    Router.push(
      `/result?holiday_type=${holiday_type}&budget=${budget}&rating=${rating}&continent=${continent}`
    );
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
          <form onSubmit={submitAdvancedCriteria}>
            <label>Holiday Type</label>
            <select onChange={changeAdvancedCriteria} name="holiday_type">
              <option value="">Holiday Type</option>
              <option value="sun">Sun Holiday</option>
              <option value="city break">City Break</option>
              <option value="adventure">Adventure</option>
              <option value="winter">Winter Holiday</option>
            </select>
            <label>Budget</label>
            <select onChange={changeAdvancedCriteria} name="budget">
              <option value="">Budget</option>
              <option value="£">£</option>
              <option value="££">££</option>
              <option value="£££">£££</option>
            </select>
            <label>Rating</label>
            <select onChange={changeAdvancedCriteria} name="rating">
              <option value="">Rating</option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
            <label>Continent</label>
            <select onChange={changeAdvancedCriteria} name="continent">
              <option value="">Continent</option>
              <option value="europe">Europe</option>
              <option value="north america">North America</option>
              <option value="south america">South America</option>
              <option value="africa">Africa</option>
              <option value="australia">Australia</option>
              <option value="asia">Asia</option>
            </select>
            <input value="Search" type="submit" />
          </form>
        )}
      </div>
    </div>
  );
}
