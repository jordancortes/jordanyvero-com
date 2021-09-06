import Head from "next/head";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../util/AppContext";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import GuestForm from "../../components/GuestForm";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { updateOneInvitationMutation } from "../../graphql/mutations";

export default function Invitation() {
  const router = useRouter();
  const [assistance, setAssistance] = useState(0);
  const [isPageReady, setIsPageReady] = useState(false);
  const [isConfirmButtonBlocked, setIsConfirmButtonBlocked] = useState(false);
  const { invitationQuery, setInvitationQuery, prepareInivitationInput } = useContext(AppContext);

  const [updateOneInvitation, { data, loading, error }] = useMutation(updateOneInvitationMutation);

  // if invitation is not loaded, we go back to landing
  useEffect(() => {
    if (!invitationQuery) {
      router.push({ pathname: "/" });
    } else {
      setAssistance(invitationQuery.assistance);
      setIsPageReady(true);
    }
  }, []);

  // when invitation is updated, we update it in the state
  useEffect(() => {
    if (data) {
      setInvitationQuery(data.updateOneInvitation);
    }
  }, [data]);

  // when invitation is updated, and state is refreshed, we go
  useEffect(() => {
    if (data && invitationQuery) {
      // Go to confirmation page
      router.push({ pathname: "./confirmation" });
    }
  }, [invitationQuery]);

  // when page is ready or assistance is updated, we modify the visible objects
  useEffect(() => {
    if (isPageReady) {
      let form = document.querySelector("form");

      if (assistance === 0) {
        cleanContactDetails(form.elements);

        for (let i = 0; i < invitationQuery.max_assistance; i++) {
          cleanGuestDetails(form.elements, i);
        }
      } else {
        // Show only needed guests
        Array.from(document.querySelectorAll(".guest")).forEach((guest) => {
          if (assistance > guest.dataset.order) {
            // re-add required conditions
            form.elements["name"][guest.dataset.order].required = true;

            document.querySelector("#guest-" + guest.dataset.order).classList.remove("hidden");
          } else {
            cleanGuestDetails(form.elements, guest.dataset.order);
          }
        });

        // Clean message text
        form.elements.message.value = null;

        // re-add contact required conditions
        form.elements["email"].required = true;
        form.elements["primary_phone"].required = true;

        // Handle rest of content
        document.querySelector("#no-guest-message").classList.add("hidden");
        document.querySelector("#guests-contact-details").classList.remove("hidden");
        document.querySelector("#guests-wedding-details").classList.remove("hidden");
      }
    }
  }, [isPageReady, assistance]);

  // submit update invitation
  const handleSubmitInvitation = (e) => {
    e.preventDefault();

    // Block button
    setIsConfirmButtonBlocked(true);

    // Get object and run update
    const invitationInput = prepareInivitationInput(e.target.elements);
    updateOneInvitation({ variables: { code: invitationQuery.code, invitation: invitationInput } });
  };

  const cleanContactDetails = (elements) => {
    elements["email"].value = null;
    elements["primary_phone"].value = null;
    elements["secondary_phone"].value = null;

    // remove required conditions
    elements["email"].required = false;
    elements["primary_phone"].required = false;

    // hide sections
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

    // remove required conditions
    elements["name"][order].required = false;

    // hide the whole section
    document.querySelector("#guest-" + order).classList.add("hidden");
  };

  return isPageReady ? (
    <div>
      <Head>
        <title>Boda Jordan&amp;Vero | Invitaci&oacute;n</title>
      </Head>

      <Header />
      <div className="px-3">
        <div className="flex flex-col items-center py-4 space-y-2">
          <h2>¡Hola {invitationQuery.family_name}!</h2>
          <p>Tenemos {invitationQuery.max_assistance} lugares esperando por ustedes.</p>
        </div>
        <form onSubmit={handleSubmitInvitation} className="flex flex-col space-y-4 pb-4">
          <Select
            label="Confirmo que asistir&aacute;n a la boda:"
            onChange={(e) => setAssistance(parseInt(e.target.value))}
            defaultValue={assistance}
            name="assistance"
          >
            {[...Array(invitationQuery.max_assistance + 1)].map((v, idx) => (
              <option key={idx} value={idx}>
                {idx === 0 ? "No asistiré" : idx + (idx === 1 ? " persona" : " personas")}
              </option>
            ))}
          </Select>

          <div id="guests-contact-details">
            <div className="space-y-4">
              <Input
                name="email"
                label="Email"
                type="email"
                defaultValue={invitationQuery.email}
                required
              ></Input>
              <Input
                name="primary_phone"
                label="Tel&eacute;fono #1"
                type="number"
                pattern="[0-9]*"
                defaultValue={invitationQuery.primary_phone}
                required
              ></Input>
              <Input
                name="secondary_phone"
                label="Tel&eacute;fono #2"
                type="number"
                pattern="[0-9]*"
                defaultValue={invitationQuery.secondary_phone}
              ></Input>
            </div>
          </div>

          <Divider />

          <div id="no-guest-message" className="space-y-4 hidden">
            <p>
              Del fieston que te vas a perder, al menos dejanos un mensaje (y te pasas por la
              sección de regalos)
            </p>
            <Input
              name="message"
              label="Mensaje"
              type="area"
              defaultValue={invitationQuery.message}
            ></Input>
          </div>

          <div id="guests-wedding-details" className="space-y-4">
            {[...Array(invitationQuery.max_assistance)].map((v, idx) => (
              <GuestForm
                key={"guest" + idx}
                id={"guest-" + idx}
                className="guest"
                dataOrder={idx}
                title={"Invitado #" + (idx + 1)}
                guestData={invitationQuery.guests[idx]}
              ></GuestForm>
            ))}
          </div>

          <Button className="place-self-center" type="submit" disabled={isConfirmButtonBlocked}>
            Confirmar Asistencia
          </Button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}
