import Image from "next/image";
import { useTranslation } from "next-i18next";

const renderCity = (city, t) => {
  switch (city) {
    case "guadalajara":
      return (
        <Image
          src="/images/wedding/city/guadalajara.jpg"
          alt={t("gdl-image-alt")}
          width="259"
          height="259"
        />
      );
    case "tequila":
      return (
        <Image
          src="/images/wedding/city/tequila.jpg"
          alt={t("tequila-image-alt")}
          width="259"
          height="259"
        />
      );
    case "magic":
      return (
        <Image
          src="/images/wedding/city/magic.jpg"
          alt={t("magic-image-alt")}
          width="259"
          height="259"
        />
      );
    case "vallarta":
      return (
        <Image
          src="/images/wedding/city/vallarta.jpg"
          alt={t("vallarta-image-alt")}
          width="259"
          height="259"
        />
      );
  }
};

const City = ({ city, children, variant }) => {
  const { t } = useTranslation("comp-city");

  return (
    <div className="flex flex-col items-center mb-10 border rounded-sm p-2">
      <div className="flex mb-3">{renderCity(variant, t)}</div>
      <h3>{city}</h3>
      <p className="text-center">{children}</p>
    </div>
  );
};

export default City;
