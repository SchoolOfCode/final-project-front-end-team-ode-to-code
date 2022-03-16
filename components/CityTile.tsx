import styles from './styles/CityTile.module.css';

function CityTile({ city }: { city: any }) {
  return (
    <div className={styles.container}>
      <p>
        <span className={styles.header}>City Name: {city.city_name}</span>
        <br />
        <span className={styles.strong}>Country:</span> {city.country}
        <br />
        <span className={styles.strong}>Continent: </span>
        {city.continent}
        <br />
        <span className={styles.strong}>Rating: </span>
        {city.rating}
        <br />
        <span className={styles.strong}>Image: </span>
        <a href={city.image}>{city.image}</a>
        <br />
        <span className={styles.strong}>Image2: </span>
        <a href={city.image2}>{city.image2}</a>
        <br />
        <span className={styles.strong}>City Description: </span>
        {city.city_description}
        <br />
        <span className={styles.strong}>City Attractions: </span>
        {city.city_attractions.join(', ')}
        <br />
        <span className={styles.strong}>Great For: </span>
        {city.great_for.join(', ')}
        <br />
        <span className={styles.strong}>Tags: </span>
        {city.tags.join(', ')}
        <br />
        <span className={styles.strong}>Budget: </span>
        {city.budget}
        <br />
        <span className={styles.strong}>Holiday Type: </span>
        {city.holiday_type}
      </p>
    </div>
  );
}

export default CityTile;
