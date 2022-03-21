import CityTile from './CityTile';
import CountryTile from './CountryTile';
import styles from './styles/Tile.module.css'
import {City, Country} from '../interfaces';

function Tile({
  cityOrCountry,
  data,
  actionType,
}: {
  cityOrCountry: string;
  data: City | Country;
  actionType: string;
}): JSX.Element {
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
  else {return <></>}
}

export default Tile;
