import styles from '../components/styles/TextArea.module.css';

function TextArea({
  text,
  name,
  action,
}: {
  text: string;
  name: string;
  action: any;
}): JSX.Element {
  function handleChange(e: any) {
    e.preventDefault();
    const value = e.target.value;
    const text = e.target.id;
    action(value, text);
  }

  return (
    <div className={styles.formField}>
      <label htmlFor={text}>{name}: </label>
      <textarea
        className={styles.input}
        id={text}
        rows={4}
        cols={50}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

export default TextArea;
