import CityForm from './CityForm';
import CountryForm from './CountryForm';
import {City, Country} from '../interfaces';

function Form({
  cityOrCountry,
  action,
}: {
  cityOrCountry: string;
  action: () => void;
}): JSX.Element {
  if (cityOrCountry === 'city') {
    return <CityForm action={action} />;
  } else if (cityOrCountry === 'country') {
    return <CountryForm action={action} />;
  }
  else {return <></>}
}

export default Form;
