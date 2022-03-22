import styles from './styles/Form.module.css';
import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import TextArea from './TextArea';
import {Changes} from '../interfaces';


function AmendForm({action}: {action: (changes: Changes)=>void}): JSX.Element {
  const [changes,setChanges] = useState<Changes>({
    name: '',
    column: '',
    data: '',
 });

  function updateState(value: string, text: string): void {
    switch (text) {
      case 'name':
        setChanges((changes) => ({ ...changes, name: value }));
        break;
      case 'column':
        setChanges((changes) => ({ ...changes, column: value }));
        break;
      case 'data':
        if (changes.column === 'city attractions' || changes.column === 'great_for' || changes.column === 'tags' || changes.column === 'cities') {
          setChanges((changes) => ({ ...changes, data: value.split(', ') }));
        }
        else if (changes.column === 'rating') {
          const newValue = parseInt(value);
          setChanges((changes) => ({ ...changes, data: newValue }));
        }
        else {setChanges((changes) => ({ ...changes, data: value.split(', ') }))};
        break;
      default:
        console.log('something has gone wrong!');
        break;
    }
  }

  return (
    <div className={styles.form}>
      <Input text="name" type="text" name="Name of City/Country" action={updateState} />
      <Input text="column" type="text" name="Field to update" action={updateState} />
      <TextArea
        text="data"
        name="New Data"
        action={updateState}
      />
    <div className={styles.center}>
        <Button text="Submit" action={() => action(changes)} />
      </div>
    </div>
  );
}

export default AmendForm;
