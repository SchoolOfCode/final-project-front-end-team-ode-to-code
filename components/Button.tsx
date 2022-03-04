{
  /*
  * Generic Button Component *
  -- Props:
    -- text: the name of the button
  */
}

import styles from './styles/Button.module.css';

function Button({ text, luckyDip }: { text: string; luckyDip?: any }) {
  return (
    <button className={styles.button} onClick={luckyDip}>
      {text}
    </button>
  );
}

export default Button;
