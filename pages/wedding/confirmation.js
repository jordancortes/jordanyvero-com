import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import AppContext from "../../util/AppContext";
import Button from "../../components/Button";
import Header from "../../components/Header";

export default function Confirmation() {
  const router = useRouter();
  const { invitationQuery } = useContext(AppContext);

  const handleGoToWedding = () => {
    router.replace({ pathname: "/wedding", query: { code: invitationQuery.code } });
  };

  return (
    <div>
      <Head>
        <title>Boda Jordan&amp;Vero | Confirmaci&oacute;n</title>
      </Head>

      <Header />
      <div className="px-4">
        <div className="flex flex-col items-center text-center space-y-4 pt-4">
          <h2>¡Gracias por confirmar tu asistencia!</h2>
          {invitationQuery.assistance !== 0 ? (
            <div className="space-y-4">
              <p>
                Si necesitas hacer un cambio aun lo puedes hacer y te invitamos a ver el resto de la
                informacion.
              </p>
              <p>¡Te esperamos el dia de la boda!</p>
            </div>
          ) : (
            ""
          )}
          <Button onClick={handleGoToWedding}>Volver a la invitaci&oacute;n</Button>
        </div>
      </div>
    </div>
  );
}
