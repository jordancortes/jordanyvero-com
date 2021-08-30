import Image from "next/image";

const renderCity = (city) => {
  switch (city) {
    case "guadalajara":
      return (
        <Image
          src="/images/wedding/city/guadalajara.jpg"
          alt="Foto de la ciudad de Guadalajara"
          width="259"
          height="259"
        />
      );
    case "tequila":
      return (
        <Image
          src="/images/wedding/city/tequila.jpg"
          alt="Foto de la ciudad de Tequila"
          width="259"
          height="259"
        />
      );
    case "magic":
      return (
        <Image
          src="/images/wedding/city/magic.jpg"
          alt="Foto de pueblo magico"
          width="259"
          height="259"
        />
      );
    case "vallarta":
      return (
        <Image
          src="/images/wedding/city/vallarta.jpg"
          alt="Foto de la ciudad de Vallarta"
          width="259"
          height="259"
        />
      );
  }
};

const City = ({ city, children, variant }) => {
  return (
    <div className="flex flex-col items-center mb-10 border rounded-sm p-2">
      <div className="flex mb-3">{renderCity(variant)}</div>
      <h3>{city}</h3>
      <p className="text-center">{children}</p>
    </div>
  );
};

export default City;
