import Input from "./Input";
import Select from "./Select";
import { useTranslation } from "next-i18next";

const GuestForm = ({ id, className, dataOrder, title, guestData }) => {
  const { t } = useTranslation("comp-guestform");

  let l_class = "flex flex-col  space-y-4" + (className !== undefined ? " " + className : "");

  return (
    <div id={id} data-order={dataOrder} className={l_class}>
      <h2 className="text-5xl font-medium self-center">{title}</h2>
      <input type="hidden" name="guests" value=""></input>
      <Input
        name={"name"}
        label={t("name-input-label")}
        defaultValue={guestData.name}
        required
      ></Input>
      <Select name={"diet"} label={t("dish-input-label")} defaultValue={guestData.diet}>
        <option value="meat">{t("dish-option1")}</option>
        <option value="vegetarian">{t("dish-option2")}</option>
        <option value="vegan">{t("dish-option3")}</option>
      </Select>
      <Input
        name={"allergies"}
        label={t("allergies-input-label")}
        type="area"
        defaultValue={guestData.allergies}
      ></Input>
    </div>
  );
};

export default GuestForm;
