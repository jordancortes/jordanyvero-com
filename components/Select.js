const Select = ({ children, defaultValue, name, label, className, onChange }) => {
  let l_class =
    "p-2 w-full border border-gray-300 rounded-sm shadow-md block" +
    (className !== undefined ? " " + className : "");

  return (
    <div className="space-y-1">
      {label ? <label htmlFor={name}>{label}</label> : ""}
      <select defaultValue={defaultValue} name={name} className={l_class} onChange={onChange}>
        {children}
      </select>
    </div>
  );
};

export default Select;
