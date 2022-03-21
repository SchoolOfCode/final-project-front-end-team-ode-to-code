import styles from './styles/Form.module.css';
import { useState } from 'react';
import Input from './Input';
import DropDown from './DropDown';
import Button from './Button';
import TextArea from './TextArea';
import {City} from '../interfaces'

function CityForm(action: (city: City)=> void): JSX.Element {
  const [city, setCity] = useState<City>({
    city_name: '',
    country: '',
    continent: '',
    rating: 0,
    image: '',
    image2: '',
    city_description: '',
    city_attractions: [''],
    great_for: [''],
    tags: [''],
    budget: '',
    holiday_type: '',
  });

  function updateState(value: string, text: string) {
    switch (text) {
      case 'city_name':
        setCity((city) => ({ ...city, city_name: value }));
        break;
      case 'country':
        setCity((city) => ({ ...city, country: value }));
        break;
      case 'continent':
        setCity((city) => ({ ...city, continent: value }));
        break;
      case 'rating':
        const newValue = parseInt(value);
        setCity((city) => ({ ...city, rating: newValue }));
        break;
      case 'image':
        setCity((city) => ({ ...city, image: value }));
        break;
      case 'image2':
        setCity((city) => ({ ...city, image2: value }));
        break;
      case 'city_description':
        setCity((city) => ({ ...city, city_description: value }));
        break;
      case 'city_attractions':
        setCity((city) => ({ ...city, city_attractions: value.split(', ') }));
        break;
      case 'great_for':
        setCity((city) => ({ ...city, great_for: value.split(', ') }));
        break;
      case 'tags':
        setCity((city) => ({ ...city, tags: value.split(', ') }));
        break;
      case 'budget':
        setCity((city) => ({ ...city, budget: value }));
        break;
      case 'holiday_type':
        setCity((city) => ({ ...city, holiday_type: value }));
        break;
      default:
        console.log('something has gone wrong!');
        break;
    }
  }

  return (
    <div className={styles.form}>
      <Input
        text="city_name"
        type="text"
        name="City Name"
        action={updateState}
      />
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
      <DropDown
        values={[
          { value: 1, option: '⭐' },
          { value: 2, option: '⭐⭐' },
          { value: 3, option: '⭐⭐⭐' },
          { value: 4, option: '⭐⭐⭐⭐' },
          { value: 5, option: '⭐⭐⭐⭐⭐' },
        ]}
        id="rating"
        label="Rating"
        layout="flex"
        action={updateState}
      />
      <Input text="image" type="text" name="Image" action={updateState} />
      <Input text="image2" type="text" name="Image2" action={updateState} />
      <TextArea
        text="city_description"
        name="City Description"
        action={updateState}
      />
      <Input
        text="city_attractions"
        type="text"
        name="City Attractions"
        action={updateState}
      />
      <Input
        text="great_for"
        type="text"
        name="Great For"
        action={updateState}
      />
      <Input text="tags" type="text" name="Tags" action={updateState} />
      <DropDown
        values={[
          { value: '£', option: '£' },
          { value: '££', option: '££' },
          { value: '£££', option: '£££' },
        ]}
        id="budget"
        label="Budget"
        layout="flex"
        action={updateState}
      />
      <DropDown
        values={[
          { value: 'sun', option: 'Sun' },
          { value: 'city break', option: 'City Break' },
          { value: 'adventure', option: 'Adventure' },
          { value: 'winter', option: 'Winter Break' },
        ]}
        id="holiday_type"
        label="Holiday Type"
        layout="flex"
        action={updateState}
      />
      <div className={styles.center}>
        <Button text="Submit" action={() => action(city)} />
      </div>
    </div>
  );
}

export default CityForm;
