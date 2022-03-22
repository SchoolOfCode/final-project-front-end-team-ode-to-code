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
  data: City | Country | string;
  actionType: string;
}): JSX.Element {

  function isCity(data: City | Country | string): data is City {
    return data.hasOwnProperty('city_name')
  }

  function isCountry(data: City | Country | string): data is Country {
    return data.hasOwnProperty('country_description')
  }
  
  if (isCity(data)) {
    return (
      <>
        <p className={styles.alert}>Successfully {actionType} the below:</p>
        <CityTile city={data} />
      </>
    );}
  
  else if (isCountry(data)) {
    return (
      <>
        <p className={styles.alert}>Successfully {actionType} the below:</p>
        <CountryTile country={data} />
      </>)
  }
  else { return <></>}
  } 
  
export default Tile;
