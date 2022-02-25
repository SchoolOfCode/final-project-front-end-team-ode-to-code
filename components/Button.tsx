{
  /*
  * Generic Button Component *
  -- Props:
    -- text: the name of the button
  */
}

import styles from './styles/Button.module.css';

function Button({ text }: { text: string }) {
  return <button className={styles.button}>{text}</button>;
}

export default Button;
