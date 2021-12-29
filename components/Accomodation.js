import Image from "next/image";

const renderAccomodation = (hotel) => {
  switch (hotel) {
    case "FCH Providencia":
      return (
        <Image
          src="/images/wedding/accomodation/fch.jpg"
          alt="Foto del hotel FCH Providencia"
          width="259"
          height="259"
        />
      );
    case "Hilton Midtown":
      return (
        <Image
          src="/images/wedding/accomodation/hilton.jpg"
          alt="Foto del hotel Hilton Midtown"
          width="259"
          height="259"
        />
      );
  }
};

const Accomodation = ({ children, title, code, url }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <h3>{title}</h3>
      {renderAccomodation(title)}
      <h4 className="font-medium">C&oacute;digo: {code}</h4>
      <p className="text-center">{children}</p>
      <a className="variant-secondary" href={url}>
        Ver detalles
      </a>
    </div>
  );
};

export default Accomodation;
