const Container = ({ className, children }) => {
  let l_class =
    "flex flex-col items-center py-4 px-6 p space-y-4" +
    (className !== undefined ? " " + className : "");

  return <div className={l_class}>{children}</div>;
};

export default Container;
