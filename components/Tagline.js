const Tagline = ({ children }) => {
  return (
    <div className="bg-dot-gray bg-repeat-x bg-center w-full">
      <span className="font-medium text-sm bg-white pr-3">{children}</span>
    </div>
  );
};

export default Tagline;
