import styles from './styles/Button.module.css';

interface ButtonProps {
  text: string;
  action: () => void;
}

function Button({ text, action }: ButtonProps): JSX.Element {
  return (
    <button data-cy="button" className={styles.button} onClick={() => action()}>
      {text}
    </button>
  );
}

export default Button;
