import { useRouter } from "next/router";
import Button from "./Button";

const Header = ({ withButton }) => {
  const router = useRouter();

  const handleGoToInvitation = async () => {
    router.push({ pathname: "/wedding/invitation" });
  };

  const handleGoToWedding = async () => {
    router.push({ pathname: "/wedding" });
  };

  return (
    <header className="px-2 py-3 border-b flex justify-between">
      <h1
        onClick={handleGoToWedding}
        className="text-primary font-cursive text-3xl cursor-pointer"
      >
        J&amp;V
      </h1>
      {withButton ? (
        <Button onClick={handleGoToInvitation}>Confirmar Asistencia</Button>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
