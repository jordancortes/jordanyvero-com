import Head from "next/head";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Select from "../../components/Select";
import GuestForm from "../../components/GuestForm";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Invitation() {
  const [maxAssistance, setMaxAssistance] = useState(4);
  const [assistance, setAssistance] = useState(2);

  const router = useRouter();

  const handleSubmitInvitation = (e) => {
    e.preventDefault();

    //TODO: handle database update

    router.push({ pathname: "./confirmation" });
  };

  const cleanContactDetails = (elements) => {
    elements["email"].value = null;
    elements["primary_phone"].value = null;
    elements["secondary_phone"].value = null;

    document.querySelector("#no-guest-message").classList.remove("hidden");
    document.querySelector("#guests-contact-details").classList.add("hidden");
    document.querySelector("#guests-wedding-details").classList.add("hidden");
  };

  const cleanGuestDetails = (elements, order) => {
    // cleanup fields
    elements["name"][order].value = null;
    elements["diet"][order].value = "meat";
    elements["transport"][order].value = "false";
    elements["allergies"][order].value = null;

    // hide the whole section
    document.querySelector("#guest-" + order).classList.add("hidden");
  };

  useEffect(() => {
    let form = document.querySelector("form");

    if (assistance === "0") {
      cleanContactDetails(form.elements);

      for (let i = 0; i < maxAssistance; i++) {
        cleanGuestDetails(form.elements, i);
      }
    } else {
      // Show only needed guests
      Array.from(document.querySelectorAll(".guest")).forEach((guest) => {
        if (assistance > guest.dataset.order) {
          document.querySelector("#guest-" + guest.dataset.order).classList.remove("hidden");
        } else {
          cleanGuestDetails(form.elements, guest.dataset.order);
        }
      });

      // Handle rest of content
      document.querySelector("#no-guest-message").classList.add("hidden");
      document.querySelector("#guests-contact-details").classList.remove("hidden");
      document.querySelector("#guests-wedding-details").classList.remove("hidden");
    }
  }, [maxAssistance, assistance]);

  return (
    <div>
      <Head>
        <title>Boda Jordan&amp;Vero | Invitaci&oacute;n</title>
      </Head>

      <Header />
      <div className="px-3">
        <div className="flex flex-col items-center py-4 space-y-2">
          <h2>¡Hola familia Cortes Garcia!</h2>
          <p>Tenemos {maxAssistance} lugares esperando por ustedes.</p>
        </div>
        <form onSubmit={handleSubmitInvitation} className="flex flex-col space-y-4 pb-4">
          <Select
            label="Confirmo que asistir&aacute;n a la boda:"
            onChange={(e) => setAssistance(e.target.value)}
            defaultValue={assistance}
            name="assistance"
          >
            {[...Array(maxAssistance + 1)].map((v, idx) => (
              <option key={idx} value={idx}>
                {idx === 0 ? "No asistiré" : idx + (idx === 1 ? " persona" : " personas")}
              </option>
            ))}
          </Select>

          <div id="guests-contact-details">
            <div className="space-y-4">
              <Input name="email" label="Email" type="email"></Input>
              <Input
                name="primary_phone"
                label="Tel&eacute;fono #1"
                type="number"
                pattern="[0-9]*"
              ></Input>
              <Input
                name="secondary_phone"
                label="Tel&eacute;fono #2"
                type="number"
                pattern="[0-9]*"
              ></Input>
            </div>
          </div>

          <Divider />

          <div id="no-guest-message" className="space-y-4 hidden">
            <p>
              Del fieston que te vas a perder, al menos dejanos un mensaje (y te pasas por la
              sección de regalos)
            </p>
            <Input name="message" label="Mensaje" type="area"></Input>
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
    </div>
  );
}
