import styles from './styles/DropDown.module.css';


interface DropDrown {
  values: { value: string | number; option: string }[];
  id: string;
  label: string;
  layout: string;
  action: (value: string, text: string) => void;
  defaultvalue?: string;
}

function DropDown({
  values,
  id,
  label,
  action,
  defaultvalue,
  layout,
}: DropDrown): JSX.Element {
  
  function handleChange(e: any) {
    e.preventDefault();
    const value = e.target.value;
    const text = e.target.id;
    action(value, text);
  }

  return (
    <div className={`${styles[layout]}`}>
      <label htmlFor={id}>{label}: </label>
      <select onChange={handleChange} id={id} value={defaultvalue}>
        <option value=""></option>
        {values.map(({value, option}: {value: string | number, option: string}) => (
          <option key={value} value={value}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
