import Image from "next/image";
import { useTranslation } from "next-i18next";

const renderAccomodation = (hotel, t) => {
  switch (hotel) {
    case "FCH Providencia":
      return (
        <Image
          src="/images/wedding/accomodation/fch.jpg"
          alt={t("fch-image-alt")}
          width="259"
          height="259"
        />
      );
    case "Hilton Midtown":
      return (
        <Image
          src="/images/wedding/accomodation/hilton.jpg"
          alt={t("hilton-image-alt")}
          width="259"
          height="259"
        />
      );
  }
};

const renderCode = (code, t) => {
  if (code !== undefined) {
    return <h4 className="font-medium">{t("code-text") + code}</h4>;
  } else {
    return <h4>.</h4>;
  }
};

const renderUrl = (url, t) => {
  if (url !== undefined) {
    return (
      <a className="variant-secondary" href={url}>
        {t("details-button1")}
      </a>
    );
  }
};

const Accomodation = ({ children, title, code, url }) => {
  const { t } = useTranslation("comp-accommodation");

  return (
    <div className="flex flex-col items-center space-y-2">
      <h3>{title}</h3>
      {renderAccomodation(title, t)}
      {renderCode(code, t)}
      <p className="text-center">{children}</p>
      {renderUrl(url, t)}
    </div>
  );
};

export default Accomodation;
