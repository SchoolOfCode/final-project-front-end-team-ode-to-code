import CityForm from './CityForm';
import CountryForm from './CountryForm';

function Form({
  cityOrCountry,
  action,
}: {
  cityOrCountry: string;
  action: any;
}) {
  if (cityOrCountry === 'city') {
    return <CityForm action={action} />;
  } else if (cityOrCountry === 'country') {
    return <CountryForm action={action} />;
  }
  else {return <></>}
}

export default Form;
