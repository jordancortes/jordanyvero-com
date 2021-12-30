import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";
import AppContext from "../../util/AppContext";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["wed-confirm"])),
      // Will be passed to the page component as props
    },
  };
}

export default function Confirmation() {
  const router = useRouter();
  const [assistance, setAssistance] = useState(0);
  const [isPageReady, setIsPageReady] = useState(false);
  const { invitationQuery } = useContext(AppContext);
  const { t } = useTranslation("wed-confirm");

  // if invitation is not loaded, we go back to landing
  useEffect(() => {
    if (!invitationQuery) {
      router.push({ pathname: "/" });
    } else {
      setAssistance(invitationQuery.assistance);
      setIsPageReady(true);
    }
  }, []);

  const handleGoToWedding = () => {
    router.replace({ pathname: "/wedding", query: { code: invitationQuery.code } });
  };

  return isPageReady ? (
    <div>
      <Head>
        <title>{t("title")}</title>
      </Head>

      <Header />
      <div className="px-4">
        <div className="flex flex-col items-center text-center space-y-4 pt-4">
          <h2>{t("h2")}</h2>
          {assistance !== 0 ? (
            <div className="space-y-4">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
            </div>
          ) : (
            ""
          )}
          <Button onClick={handleGoToWedding}>{t("button-back1")}</Button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
