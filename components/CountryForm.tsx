import styles from './styles/CityForm.module.css';
import { useState } from 'react';
import Input from './Input';
import DropDown from './DropDown';
import Button from './Button';
import TextArea from './TextArea';

function CountryForm({ action }: { action?: any }) {
  const [country, setCountry] = useState({
    country: '',
    continent: '',
    image: '',
    image2: '',
    country_description: '',
    cities: [''],
  });

  function updateState(value: any, text: string) {
    switch (text) {
      case 'country':
        setCountry((country) => ({ ...country, country: value }));
        break;
      case 'continent':
        setCountry((country) => ({ ...country, continent: value }));
        break;
      case 'image':
        setCountry((country) => ({ ...country, image: value }));
        break;
      case 'image2':
        setCountry((country) => ({ ...country, image2: value }));
        break;
      case 'country_description':
        setCountry((country) => ({ ...country, country_description: value }));
        break;
      case 'cities':
        setCountry((country) => ({ ...country, cities: value.split(', ') }));
        break;
      default:
        console.log('something has gone wrong!');
        break;
    }
  }

  return (
    <div className={styles.form}>
      <Input text="country" type="text" name="Country" action={updateState} />
      <DropDown
        values={[
          { value: 'Africa', option: 'Africa' },
          { value: 'Asia', option: 'Asia' },
          { value: 'Australia', option: 'Australia' },
          { value: 'Europe', option: 'Europe' },
          { value: 'North America', option: 'North America' },
          { value: 'South America', option: 'South America' },
        ]}
        id="continent"
        label="Continent"
        layout="flex"
        action={updateState}
      />
      <Input text="image" type="text" name="Image" action={updateState} />
      <Input text="image2" type="text" name="Image2" action={updateState} />
      <TextArea
        text="country_description"
        name="Country Description"
        action={updateState}
      />
      <Input text="cities" type="text" name="Cities" action={updateState} />
      <div className={styles.center}>
        <Button text="Submit" action={() => action(country)} />
      </div>
    </div>
  );
}

export default CountryForm;
