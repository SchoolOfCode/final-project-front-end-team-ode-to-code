import styles from './styles/PageTitle.module.css';

export default function Heading({text}: {text: string}): JSX.Element {
  return (
    <h1 data-cy="page-title" className={styles.title}>
      <span>{text}</span>
    </h1>
  );
}
