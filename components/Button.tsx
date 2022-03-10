{
  /*
  * Generic Button Component *
  -- Props:
    -- text: the name of the button
  */
}

import styles from './styles/Button.module.css';

function Button({ text, action }: { text: string; action?: any }) {
  return (
    <button data-cy="button" className={styles.button} onClick={() => action()}>
      {text}
    </button>
  );
}

export default Button;
