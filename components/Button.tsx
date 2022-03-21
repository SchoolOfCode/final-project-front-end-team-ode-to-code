import styles from './styles/Button.module.css';

interface ButtonProps {
  text: string;
  action: (e:any) => void;
}

function Button({ text, action }: ButtonProps): JSX.Element {
  return (
    <button data-cy="button" className={styles.button} onClick={(e) => action(e)}>
      {text}
    </button>
  );
}

export default Button;
