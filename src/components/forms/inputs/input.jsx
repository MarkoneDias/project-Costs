import styles from "./input.module.css";

function Input({ type, text, name, placeHolder, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <input
        name={name}
        type={type}
        placeholder={placeHolder}
        id={name}
        onChange={handleOnChange}
        value={value}
        key={name}
      />
    </div>
  );
}

export default Input;
