import Button from "./Button";

const Header = ({ withButton }) => {
  return (
    <header className="py-3 border-b flex justify-between">
      <h1 className="text-primary font-cursive text-4xl">J&amp;V</h1>
      {withButton ? <Button>Confirmar Asistencia</Button> : ""}
    </header>
  );
};

export default Header;
