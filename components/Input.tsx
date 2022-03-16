import styles from '../components/styles/Input.module.css';

function Input({
  text,
  name,
  type,
  action
}: {
  text: string;
  name: string;
  type: string;
  action?: any;
}) {

  function handleChange(e: any) {
    e.preventDefault();
    const value = e.target.value;
    const text = e.target.id;
    action(value, text);
  }
  
  return (
    <div className={styles.formField}>
      <label htmlFor={text}>{name}: </label>
      <input
        id={text}
        name={text}
        type={type}
        placeholder="..."
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default Input;
