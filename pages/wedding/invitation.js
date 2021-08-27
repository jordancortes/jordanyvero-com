import Button from "../../components/Button";
import Divider from "../../components/Divider";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Select from "../../components/Select";
import GuestForm from "../../components/GuestForm";

import { useEffect, useState } from "react";

export default function Invitation() {
  const [maxAssistance, setMaxAssistance] = useState(4);
  const [assistance, setAssistance] = useState(2);

  const cleanContactDetails = () => {
    document.getElementsByName("email")[0].value = null;
    document.getElementsByName("phone1")[0].value = null;
    document.getElementsByName("phone2")[0].value = null;

    document.querySelector("#no-guest-message").classList.remove("hidden");
    document.querySelector("#guests-contact-details").classList.add("hidden");
    document.querySelector("#guests-wedding-details").classList.add("hidden");
  };

  const cleanGuestDetails = (order) => {
    // cleanup fields
    document.getElementsByName("guest-" + order + "-name")[0].value = null;
    document.getElementsByName("guest-" + order + "-dish")[0].value = "meat";
    document.getElementsByName("guest-" + order + "-transport")[0].value =
      "false";
    document.getElementsByName("guest-" + order + "-allergies")[0].value = null;

    // hide the whole section
    document.querySelector("#guest-" + order).classList.add("hidden");
  };

  useEffect(() => {
    if (assistance === "0") {
      cleanContactDetails();

      for (let i = 0; i < maxAssistance; i++) {
        cleanGuestDetails(i);
      }
    } else {
      // Show only needed guests
      Array.from(document.querySelectorAll(".guest")).forEach((guest) => {
        if (assistance > guest.dataset.order) {
          document
            .querySelector("#guest-" + guest.dataset.order)
            .classList.remove("hidden");
        } else {
          cleanGuestDetails(guest.dataset.order);
        }
      });

      // Handle rest of content
      document.querySelector("#no-guest-message").classList.add("hidden");
      document
        .querySelector("#guests-contact-details")
        .classList.remove("hidden");
      document
        .querySelector("#guests-wedding-details")
        .classList.remove("hidden");
    }
  }, [maxAssistance, assistance]);

  return (
    <div className="px-3">
      <Header />
      <div className="flex flex-col items-center py-4 space-y-2">
        <h2 className="text-2xl font-medium">¡Hola familia Cortes Garcia!</h2>
        <p>Tenemos {maxAssistance} lugares esperando por ustedes.</p>
      </div>
      <form className="flex flex-col space-y-4 pb-4">
        <Select
          label="Confirmo que asistir&aacute;n a la boda:"
          onChange={(e) => setAssistance(e.target.value)}
          defaultValue={assistance}
        >
          {[...Array(maxAssistance + 1)].map((v, idx) => (
            <option key={idx} value={idx}>
              {idx === 0
                ? "No asistiré"
                : idx + (idx === 1 ? " persona" : " personas")}
            </option>
          ))}
        </Select>

        <div id="guests-contact-details">
          <div className="space-y-4">
            <Input name="email" label="Email"></Input>
            <Input
              name="phone1"
              label="Tel&eacute;fono #1"
              type="number"
            ></Input>
            <Input
              name="phone2"
              label="Tel&eacute;fono #2"
              type="number"
            ></Input>
          </div>
        </div>

        <Divider />

        <div id="no-guest-message" className="space-y-4 hidden">
          <p>
            Del fieston que te vas a perder, al menos dejanos un mensaje (y te
            pasas por la sección de regalos)
          </p>
          <Input label="Mensaje" type="area"></Input>
        </div>

        <div id="guests-wedding-details" className="space-y-4">
          {[...Array(maxAssistance)].map((v, idx) => (
            <GuestForm
              key={"guest" + idx}
              id={"guest-" + idx}
              className="guest"
              dataOrder={idx}
              title={"Invitado #" + (idx + 1)}
            ></GuestForm>
          ))}
        </div>

        <Button className="place-self-center" type="submit">
          Confirmar Asistencia
        </Button>
      </form>
    </div>
  );
}
