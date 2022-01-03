import Image from "next/image";
import Header from "./Header";
import { useTranslation } from "next-i18next";

const Loading = () => {
  const { t } = useTranslation("comp-loading");

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center space-y-4 p-4">
        <Image
          src="/images/global/loading-heart.svg"
          alt={t("image_alt")}
          width="100"
          height="100"
        />
        <h2 className="text-center">{t("h2")}</h2>
      </div>
    </div>
  );
};

export default Loading;
