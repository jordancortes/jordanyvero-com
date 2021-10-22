import Image from "next/image";

const IconContent = ({ iconType, title, children, withLink, linkTitle, linkHref }) => {
  const renderIcon = (iconType) => {
    switch (iconType) {
      case "flight":
        return (
          <Image
            src="/images/wedding/icon-flight.svg"
            alt="icono de boletos de avion"
            width="56"
            height="32"
          />
        );
      case "toWedding":
        return (
          <Image
            src="/images/wedding/icon-toWedding.svg"
            alt="icono de boda"
            width="56"
            height="32"
          />
        );
      case "fromWedding":
        return (
          <Image
            src="/images/wedding/icon-fromWedding.svg"
            alt="icono de boda"
            width="56"
            height="32"
          />
        );
      case "alcohol":
        return (
          <Image
            src="/images/wedding/icon-alcohol.svg"
            alt="icono de boda"
            width="56"
            height="32"
          />
        );
      case "dressCode":
        return (
          <Image
            src="/images/wedding/icon-singleDressCode.svg"
            alt="icono de boda"
            width="56"
            height="32"
          />
        );
      case "forbidden":
        return (
          <Image
            src="/images/wedding/icon-forbidden.svg"
            alt="icono de boda"
            width="56"
            height="32"
          />
        );
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col space-y-3 md:w-52">
      <div className="flex space-x-2 md:self-center md:-ml-4">
        <div className="w-12 flex">{renderIcon(iconType)}</div>
        <h3>{title}</h3>
      </div>
      <p className="md:text-center">{children}</p>
      {withLink ? (
        <a className="variant-secondary self-center" href={linkHref}>
          {linkTitle}
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default IconContent;
