import Image from "next/image";

const Gift = ({ iconType, title, children, withLink, linkTitle, linkHref }) => {
  const renderIcon = (iconType) => {
    switch (iconType) {
      case "gift":
        return (
          <Image src="/images/wedding/icon-gift.svg" alt="icono de regalo" width="42" height="40" />
        );
      case "cash":
        return (
          <Image src="/images/wedding/icon-cash.svg" alt="icono de dinero" width="42" height="40" />
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
        <a className="variant-secondary" href={linkHref} target="_blank">
          {linkTitle}
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default Gift;
