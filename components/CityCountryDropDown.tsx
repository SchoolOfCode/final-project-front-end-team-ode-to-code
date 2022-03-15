import styles from './styles/CityCountryDropDown.module.css';

function CityCountryDropDown({ action }: { action: any }) {
  return (
    <form className={styles.dropdown}>
      <label>Select City or Country: </label>
      <select onChange={action} name="countryOrCity">
        <option value="">...</option>
        <option value="city">City</option>
        <option value="country">Country</option>
      </select>
    </form>
  );
}

export default CityCountryDropDown;
