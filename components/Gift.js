import Image from "next/image";
import { useTranslation } from "next-i18next";

const Gift = ({ iconType, title, children, withLink, linkTitle, linkHref }) => {
  const { t } = useTranslation("comp-gift");

  const renderIcon = (iconType) => {
    switch (iconType) {
      case "gift":
        return (
          <Image
            src="/images/wedding/icon-gift.svg"
            alt={t("gift-icon-alt")}
            width="42"
            height="40"
          />
        );
      case "cash":
        return (
          <Image
            src="/images/wedding/icon-cash.svg"
            alt={t("cash-icon-alt")}
            width="42"
            height="40"
          />
        );
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      {renderIcon(iconType)}
      <div className="flex flex-col items-center">
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
      {withLink ? (
        <a className="variant-secondary" href={linkHref} target="_blank" rel="noreferrer">
          {linkTitle}
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default Gift;
