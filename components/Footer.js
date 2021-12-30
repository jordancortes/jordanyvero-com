import { useRouter } from "next/router";
import Button from "./Button";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const router = useRouter();
  const { t } = useTranslation("comp-footer");

  const handleGoToInvitation = async () => {
    router.push({ pathname: "/wedding/invitation" });
  };

  return (
    <div
      id="footer"
      className="bg-ash px-4 py-5 flex flex-col items-center space-y-4 md:flex-row md:justify-between"
    >
      <span className="flex flex-col items-center space-y-4 md:order-last md:pr-16 md:space-y-10">
        <h1 className="font-cursive text-3xl cursor-pointer">
          <a href="#">J&amp;V</a>
        </h1>
        <Button onClick={handleGoToInvitation}>{t("confirm-button1")}</Button>
      </span>
      <span className="flex flex-col items-center space-y-4 md:space-y-2 md:items-start md:pl-16">
        <a href="#place">{t("place-link")}</a>
        <a href="#event">{t("event-link")}</a>
        <a href="#important">{t("important-link")}</a>
        <a href="#gifts">{t("gift-link")}</a>
      </span>
      <span className="flex flex-col items-center space-y-4 md:space-y-2 md:items-start">
        <a href="#city">{t("city-link")}</a>
        <a href="#accomodation">{t("accommodation-link")}</a>
        <a href="#transport">{t("transport-link")}</a>
        <a href="#questions">{t("questions-link")}</a>
      </span>
    </div>
  );
};

export default Footer;
