const Button = ({ children, type, className }) => {
  let l_class =
    "py-2 px-6 bg-primary text-sm text-white font-medium rounded-sm" +
    (className !== undefined ? " " + className : "");

  let l_type = type ? type : "text";

  return (
    <button type={l_type} className={l_class}>
      {children}
    </button>
  );
};

export default Button;
