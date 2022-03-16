import styles from './styles/DropDown.module.css';

function DropDown({
  values,
  id,
  label,
  action,
  defaultvalue,
}: {
  values: any;
  id: string;
  label: string;
  action?: any;
  defaultvalue?: any;
}) {
  function handleChange(e: any) {
    e.preventDefault();
    const value = e.target.value;
    const text = e.target.id;
    action(value, text);
  }

  return (
    <div className={styles.dropdown}>
      <label htmlFor={id}>{label}: </label>
      <select onChange={handleChange} id={id} value={defaultvalue}>
        <option value=""></option>
        {values.map((each: any) => (
          <option key={each.value} value={each.value}>
            {each.option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
