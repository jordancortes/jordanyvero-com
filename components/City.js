import Image from "next/image";

const City = ({ city, children, variant }) => {
  return (
    <div className="flex flex-col items-center mb-8 border rounded-sm p-2">
      <div className="flex items-center justify-between w-full">
        <div className="flex w-2">
          {variant === "middle" || variant === "end"
            ? // <Image
              //   src="/images/wedding/chevron-left.svg"
              //   alt="flecha a la izquierda"
              //   width="8"
              //   height="16"
              // />
              ""
            : ""}
        </div>
        <Image src="/images/wedding/city.jpg" alt="Foto de Guadalajara" width="259" height="259" />
        <div className="flex w-2">
          {variant === "start" || variant === "middle"
            ? // <Image
              //   src="/images/wedding/chevron-right.svg"
              //   alt="flecha a la derecha"
              //   width="8"
              //   height="16"
              // />
              ""
            : ""}
        </div>
      </div>
      <h3>{city}</h3>
      <p className="text-center">{children}</p>
    </div>
  );
};

export default City;
