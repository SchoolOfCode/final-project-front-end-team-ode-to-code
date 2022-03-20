import styles from './styles/Form.module.css';
import { useState } from 'react';
import Input from './Input';
import Button from './Button';

function DeleteForm({ action, type }: { action: any; type: string }) {
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
        <Button text="Submit" action={() => action(changes, type)} />
      </div>
    </div>
  );
}

export default DeleteForm;
