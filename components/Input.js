const Input = ({
  children,
  defaultValue,
  name,
  type,
  pattern,
  label,
  placeholder,
  className,
  onChange,
  required,
}) => {
  let l_class =
    "p-2 w-full border border-gray-300 rounded-sm shadow-md block" +
    (className !== undefined ? " " + className : "");

  return (
    <div className="space-y-1">
      {label ? <label htmlFor={name}>{label}</label> : ""}
      {type === "area" ? (
        <textarea name={name} rows="3" className={l_class} defaultValue={defaultValue}>
          {children}
        </textarea>
      ) : (
        <input
          defaultValue={defaultValue}
          name={name}
          type={type}
          pattern={pattern}
          placeholder={placeholder}
          className={l_class}
          onChange={onChange}
          required={required}
        ></input>
      )}
    </div>
  );
};

export default Input;
