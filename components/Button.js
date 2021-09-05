const Button = ({ children, onClick, type, variant, className, disabled = false }) => {
  let l_primary_class =
    "py-2 px-3 bg-primary text-sm text-white font-medium rounded-sm disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-primary-light focus:ring-offset-1 hover:bg-primary-dark" +
    (className !== undefined ? " " + className : "");

  let l_secondary_class =
    "py-2 px-3 bg-white text-sm text-primary font-medium rounded-sm border border-primary" +
    (className !== undefined ? " " + className : "");

  let l_type = type ? type : "text";
  let l_class = variant === "secondary" ? l_secondary_class : l_primary_class;

  return (
    <button type={l_type} className={l_class} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
