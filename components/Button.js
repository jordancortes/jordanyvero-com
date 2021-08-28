const Button = ({ children, onClick, type, variant, className }) => {
  let l_primary_class =
    "py-2 px-3 bg-primary text-sm text-white font-medium rounded-sm" +
    (className !== undefined ? " " + className : "");

  let l_secondary_class =
    "py-2 px-3 bg-white text-sm text-primary font-medium rounded-sm border border-primary" +
    (className !== undefined ? " " + className : "");

  let l_type = type ? type : "text";
  let l_class = variant === "secondary" ? l_secondary_class : l_primary_class;

  return (
    <button type={l_type} className={l_class} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
