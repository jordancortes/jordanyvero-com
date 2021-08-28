const Button = ({ children, onClick, type, className }) => {
  let l_class =
    "py-2 px-3 bg-primary text-sm text-white font-medium rounded-sm" +
    (className !== undefined ? " " + className : "");

  let l_type = type ? type : "text";

  return (
    <button type={l_type} className={l_class} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
