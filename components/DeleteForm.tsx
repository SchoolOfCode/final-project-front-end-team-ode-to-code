import styles from './styles/Form.module.css';
import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import {Changes} from '../interfaces';

function DeleteForm({action}: {action: (data: Changes)=> void}): JSX.Element {
  const [changes, setChanges] = useState<{name: string}>({
    name: '',
  });

  function updateState(value: string) {
    setChanges({ name: value });
  }

  return (
    <div className={styles.form}>
      <Input
        text="name"
        type="text"
        name="Name of City/Country"
        action={updateState}
      />
      <div className={styles.center}>
        <Button text="Submit" action={() => action(changes)} />
      </div>
    </div>
  );
}

export default DeleteForm;
