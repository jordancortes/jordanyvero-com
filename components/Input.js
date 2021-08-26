const Input = ({ children, type, placeholder, className }) => {
  let fullClass =
    "border border-gray-300 rounded-sm shadow-md block text-gray-600 text-sm text-center " +
    className;

  return (
    <input type={type} placeholder={placeholder} className={fullClass}></input>
  );
};

export default Input;
