import Header from "./Header";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/router";

const InvitationNotFound = ({ code }) => {
  const router = useRouter();

  const handleGoToSearch = () => {
    router.push({ pathname: "/" });
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col space-y-4 p-4 items-center">
        <h2 className="mb-4">Esta invitaci&oacute;n no existe</h2>
        <Image
          src="/images/global/icon-letter.svg"
          alt="Icono de invitación"
          width="100"
          height="100"
        />
        <p className="text-center">
          El c&oacute;digo <span className="font-medium">{code}</span> es incorrecto. Si crees que
          el c&oacute;digo es correcto, por favor escribenos a{" "}
          <a href="mailto:boda@jordanyvero.com">boda@jordanyvero.com</a> para ayudarte con el
          problema.
        </p>
        <Button onClick={handleGoToSearch}>Volver al inicio</Button>
      </div>
    </div>
  );
};

export default InvitationNotFound;
