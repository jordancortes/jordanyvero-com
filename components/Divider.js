import Image from "next/image";
import { useTranslation } from "next-i18next";

const Divider = () => {
  const { t } = useTranslation("comp-divider");

  return (
    <div className="flex flex-col items-center">
      <Image
        alt={t("divider-alt")}
        src="/images/global/section-divider.svg"
        width="300"
        height="29.56"
        layout="fixed"
      />
    </div>
  );
};

export default Divider;
