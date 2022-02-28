import styles from './styles/PageTitle.module.css';

export default function Heading({ text }: { text: string }) {
  return (
    <h1 className={styles.title}>
      <span>{text}</span>
    </h1>
  );
}
