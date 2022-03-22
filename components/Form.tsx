import CityForm from './CityForm';
import CountryForm from './CountryForm';
import {City, Country, Changes} from '../interfaces';

function Form({
  cityOrCountry,
  action,
}: {
  cityOrCountry: string;
  action: (newData: City | Country | Changes) => Promise<void>;
}): JSX.Element {

  
  if (cityOrCountry === 'city') {
    return <CityForm action={action} />;
  } else if (cityOrCountry === 'country') {
    return <CountryForm action={action} />;
  }
  else {return <></>}
}

export default Form;
