import styles from './styles/Form.module.css';
import { useState } from 'react';
import Input from './Input';
import Button from './Button';

function DeleteForm({ action }: { action: any}) {
  const [changes, setChanges] = useState({
    name: '',
  });

  function updateState(value: any) {
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
