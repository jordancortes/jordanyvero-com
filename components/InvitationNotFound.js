import Header from "./Header";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const tmail = () => {
  return <a href="mailto:boda@jordanyvero.com">boda@jordanyvero.com</a>;
};

const InvitationNotFound = ({ code }) => {
  const router = useRouter();
  const { t } = useTranslation("comp-notfound");

  const handleGoToSearch = () => {
    router.push({ pathname: "/" });
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col space-y-4 p-4 items-center">
        <h2 className="mb-4">{t("h2")}</h2>
        <Image src="/images/global/icon-letter.svg" alt={t("image-alt")} width="100" height="100" />
        <p className="text-center">
          {t("text1")} <span className="font-medium">{code}</span> {t("text2")}{" "}
          <a href="mailto:boda@jordanyvero.com">boda@jordanyvero.com</a> {t("text3")}
        </p>
        <Button onClick={handleGoToSearch}>{t("back-button1")}</Button>
      </div>
    </div>
  );
};

export default InvitationNotFound;
