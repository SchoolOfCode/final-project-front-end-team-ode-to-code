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

  function isCity(data: City | Country): data is City {
    return data.hasOwnProperty('city_name')
  }
  
  if (isCity(data)) {
    return (
      <>
        <p className={styles.alert}>Successfully {actionType} the below:</p>
        <CityTile city={data} />
      </>
    );}
  
  else {
    return (
      <>
        <p className={styles.alert}>Successfully {actionType} the below:</p>
        <CountryTile country={data} />
      </>)
  }
  } 
  
export default Tile;
