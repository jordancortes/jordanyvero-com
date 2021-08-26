const Button = ({ children, className }) => {
  let fullClass =
    "py-2 px-8 bg-primary text-sm text-white font-medium rounded-sm " +
    className;

  return <button className={fullClass}>{children}</button>;
};

export default Button;
