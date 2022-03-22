import styles from './styles/CityTile.module.css';
import {Country} from '../interfaces';

function CountryTile({country, key}: {country: Country, key?: string}): JSX.Element {
  return (
    <div className={styles.container}>
      <p>
        <span className={styles.header}>Country: {country.country}</span>
        <br />
        <span className={styles.strong}>Continent: </span>
        {country.continent}
        <br />
        <span className={styles.strong}>Image: </span>
        <a href={country.image}>{country.image}</a>
        <br />
        <span className={styles.strong}>Image2: </span>
        <a href={country.image2}>{country.image2}</a>
        <br />
        <span className={styles.strong}>Country Description: </span>
        {country.country_description}
        <br />
        <span className={styles.strong}>Cities: </span>
        {country.cities.join(', ')}
      </p>
    </div>
  );
}

export default CountryTile;
