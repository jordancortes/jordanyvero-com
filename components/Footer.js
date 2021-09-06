import { useRouter } from "next/router";
import Button from "./Button";

const Footer = () => {
  const router = useRouter();

  const handleGoToInvitation = async () => {
    router.push({ pathname: "/wedding/invitation" });
  };

  return (
    <div id="footer" className="bg-ash px-4 py-5 flex flex-col items-center space-y-4">
      <h1 className="font-cursive text-3xl cursor-pointer">
        <a href="#">J&amp;V</a>
      </h1>
      <Button onClick={handleGoToInvitation}>Confirmar Asistencia</Button>
      <a href="#place">Lugar</a>
      <a href="#event">Evento</a>
      <a href="#important">Importante</a>
      <a href="#gifts">Mesa de Regalos</a>
      <a href="#city">La Ciudad</a>
      <a href="#accomodation">Hospedaje</a>
      <a href="#transport">Transporte</a>
      <a href="#questions">¿Dudas?</a>
    </div>
  );
};

export default Footer;
