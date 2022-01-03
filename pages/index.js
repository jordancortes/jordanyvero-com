import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["index"])),
      // Will be passed to the page component as props
    },
  };
}

export default function Home() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [isConfirmButtonBlocked, setIsConfirmButtonBlocked] = useState(false);
  const { t } = useTranslation("index");

  const handleGoToWedding = async (e) => {
    e.preventDefault();

    setIsConfirmButtonBlocked(true);

    router.push({ pathname: "/wedding", query: { code } });
  };

  return (
    <div className="lg:flex lg:h-screen lg:items-center">
      <Head>
        <title>{t("title")}</title>
      </Head>

      <div className="flex md:hidden">
        <Image
          src="/images/index/hero.jpg"
          alt="Foto decorada de los novios: Jordan y Vero"
          width="524"
          height="520"
          objectFit="none"
          objectPosition="65% bottom"
        />
      </div>

      <div className="hidden lg:flex lg:w-4/5 lg:-ml-80 2xl:hidden">
        <Image
          src="/images/index/hero.jpg"
          alt="Foto decorada de los novios: Jordan y Vero"
          width="1076"
          height="841"
          objectPosition="contain"
        />
      </div>

      <div className="hidden md:flex md:pb-4 md:w-full md:-ml-12 lg:hidden 2xl:flex 2xl:pb-4 2xl:w-full 2xl:-ml-80">
        <Image
          src="/images/index/hero.jpg"
          alt="Foto decorada de los novios: Jordan y Vero"
          width="2691"
          height="2103"
          objectFit="contain"
        />
      </div>

      <div className="flex flex-col space-y-3 items-center px-4 lg:w-1/2 lg:space-y-8">
        <h1 className="text-4xl lg:text-5xl xl:text-7xl text-primary font-cursive font-medium">
          Jordan &amp; Vero
        </h1>

        <div className="flex w-full md:w-3/4 xl:w-1/2">
          <div className="w-full border-b border-secondary self-center"></div>
          <div className="font-light text-secondary uppercase bg-white px-3 lg:text-xl flex-none">
            Save the Date
          </div>
          <div className="w-full border-b border-secondary self-center"></div>
        </div>

        <p className="font-medium text-center text-gray-600 lg:text-xl">
          {t("date")}
          <br />
          Guadalajara, Jalisco
        </p>

        <form className="flex space-x-3" onSubmit={handleGoToWedding}>
          <Input
            type="text"
            placeholder={t("code-input-placeholder")}
            onChange={(e) => {
              setCode(e.target.value.toUpperCase().trim());
            }}
            required
          ></Input>
          <Button className="flex-shrink-0" disabled={isConfirmButtonBlocked}>
            {t("code-button1")}
          </Button>
        </form>
      </div>
    </div>
  );
}
