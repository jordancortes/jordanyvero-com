import Image from "next/image";

const Event = ({ variant, title, time, children }) => {
  return (
    <div className="flex space-x-2">
      <div className="flex flex-col flex-shrink-0 ml-2">
        {variant === "middle" || variant === "end" ? (
          <div className="border-r-2 border-black border-dotted h-1 w-px self-center"></div>
        ) : (
          <div className="h-1"></div>
        )}
        <Image
          src="/images/global/icon-heart.svg"
          alt="icono de corazon"
          width="16.5"
          height="14.08"
          layout="fixed"
        />
        {variant === "start" || variant === "middle" ? (
          <div className="border-r-2 border-black border-dotted flex-grow w-px self-center"></div>
        ) : (
          ""
        )}
      </div>
      <div className="space-y-4 pb-9">
        <div>
          <h3 className="text-xl font-medium leading-none">{title}</h3>
          <h4 className="text-lg font-light leading-none text-gray-600">{time}</h4>
        </div>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Event;
