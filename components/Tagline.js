const Tagline = ({ children }) => {
  return (
    <div className="flex w-full">
      <div className="font-medium text-sm bg-white pr-3 flex-none">{children}</div>
      <div className="border-b border-rock w-full h-px self-center"></div>
    </div>
  );
};

export default Tagline;
