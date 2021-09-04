import Input from "./Input";
import Select from "./Select";

const GuestForm = ({ id, className, dataOrder, title, guestData }) => {
  let l_class = "flex flex-col  space-y-4" + (className !== undefined ? " " + className : "");

  return (
    <div id={id} data-order={dataOrder} className={l_class}>
      <h2 className="text-xl font-medium self-center">{title}</h2>
      <input type="hidden" name="guests" value=""></input>
      <Input name={"name"} label="Nombre" defaultValue={guestData.name}></Input>
      <Select name={"diet"} label="Platillo" defaultValue={guestData.diet}>
        <option value="meat">Res / Pescado</option>
        <option value="vegetarian">Vegetariano</option>
        <option value="vegan">Vegano</option>
      </Select>
      <Select
        name={"transport"}
        label="Necesito transporte finalizando el evento"
        defaultValue={guestData.transport}
      >
        <option value="false">No</option>
        <option value="true">Si</option>
      </Select>
      <Input
        name={"allergies"}
        label="Alergias"
        type="area"
        defaultValue={guestData.allergies}
      ></Input>
    </div>
  );
};

export default GuestForm;
