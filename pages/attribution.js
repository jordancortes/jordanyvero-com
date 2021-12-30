import Head from "next/head";
import Header from "../components/Header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["attribution"])),
      // Will be passed to the page component as props
    },
  };
}

export default function Attribution() {
  const { t } = useTranslation("attribution");

  return (
    <div>
      <Head>
        <title>{t("title")}</title>
      </Head>

      <Header />

      <div className="flex flex-col px-4 pt-4">
        <h2 className="text-center">{t("h2")}</h2>
        <h3>Backgrounds</h3>
        <ul className="list-disc list-inside pt-1 pb-4">
          <li>
            <a href="https://www.freepik.com/psd/background">
              Background psd created by BiZkettE1 - www.freepik.com
            </a>
          </li>
          <li>
            <a href="https://www.freepik.com/psd/background">
              Background psd created by denamorado - www.freepik.com
            </a>
          </li>
        </ul>
        <h3>Icons</h3>
        <ul className="list-disc list-inside pt-1 pb-4">
          <li>
            Icons made by{" "}
            <a href="https://www.freepik.com" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </li>
          <li>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">
              Good Ware
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </li>
          <li>
            <a href="https://loading.io/icon/" title="loading.io">
              icon &#39;heart&#39; from loading.io
            </a>
          </li>
        </ul>
        <h3>Ornaments</h3>
        <ul className="list-disc list-inside pt-1 pb-4">
          <li>
            <a href="https://www.freepik.com/vectors/wedding">
              Wedding vector created by pikisuperstar - www.freepik.com
            </a>
          </li>
        </ul>
        <h3>Brushes</h3>
        <ul className="list-disc list-inside pt-1 pb-4">
          <li>
            <a href="https://www.freepik.com/vectors/banner">
              Banner vector created by rawpixel.com - www.freepik.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
