import Input from "./Input";
import Select from "./Select";

const GuestForm = ({ id, className, dataOrder, title }) => {
  let l_class =
    "flex flex-col  space-y-4" +
    (className !== undefined ? " " + className : "");

  return (
    <div id={id} data-order={dataOrder} className={l_class}>
      <h2 className="text-xl font-medium self-center">{title}</h2>
      <Input name={"guest-" + dataOrder + "-name"} label="Nombre"></Input>
      <Select name={"guest-" + dataOrder + "-dish"} label="Platillo">
        <option value="meat">Res / Pescado</option>
        <option value="vegetarian">Vegetariano</option>
        <option value="vegan">Vegano</option>
      </Select>
      <Select
        name={"guest-" + dataOrder + "-transport"}
        label="Necesito transporte finalizando el evento"
      >
        <option value="false">No</option>
        <option value="true">Si</option>
      </Select>
      <Input
        name={"guest-" + dataOrder + "-allergies"}
        label="Alergias"
        type="area"
      ></Input>
    </div>
  );
};

export default GuestForm;