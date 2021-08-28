import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";

export default function Confirmation() {
  const [assistance, setAssistance] = useState(2);

  const router = useRouter();

  const handleGoToWedding = () => {
    router.replace({ pathname: "./" });
  };

  return (
    <div className="px-4">
      <Header />
      <div className="flex flex-col items-center text-center space-y-4 pt-4">
        <h2>¡Gracias por confirmar tu asistencia!</h2>
        {assistance !== 0 ? (
          <div className="space-y-4">
            <p>
              Si necesitas hacer un cambio aun lo puedes hacer y te invitamos a
              ver el resto de la informacion.
            </p>
            <p>¡Te esperamos el dia de la boda!</p>
          </div>
        ) : (
          ""
        )}
        <Button onClick={handleGoToWedding}>
          Volver a la invitaci&oacute;n
        </Button>
      </div>
    </div>
  );
}
