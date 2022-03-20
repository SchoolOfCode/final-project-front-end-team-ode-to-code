import CityTile from './CityTile';
import CountryTile from './CountryTile';
import styles from './styles/Tile.module.css'

function Tile({
  cityOrCountry,
  data,
  actionType,
}: {
  cityOrCountry: string;
  data: any;
  actionType: string;
}) {
  if (cityOrCountry === 'city') {
    return (
      <>
        <p className={styles.alert}>Successfully {actionType} the below:</p>
        <CityTile city={data} />
      </>
    );
  } else if (cityOrCountry === 'country') {
    return (
      <>
        <p className={styles.alert}>Successfully {actionType} the below:</p>
        <CountryTile country={data} />
      </>
    );
  }
}

export default Tile;
