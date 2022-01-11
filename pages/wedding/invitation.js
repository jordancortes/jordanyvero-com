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
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["wed-invitation", "comp-guestform"])),
      // Will be passed to the page component as props
    },
  };
}

export default function Invitation() {
  const router = useRouter();
  const [assistance, setAssistance] = useState(0);
  const [isPageReady, setIsPageReady] = useState(false);
  const [isConfirmButtonBlocked, setIsConfirmButtonBlocked] = useState(false);
  const { invitationQuery, setInvitationQuery, prepareInivitationInput } = useContext(AppContext);
  const { t } = useTranslation("wed-invitation");

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
            if (assistance === 1) {
              form.elements["name"].required = true;
            } else {
              form.elements["name"][guest.dataset.order].required = true;
            }

            document.querySelector("#guest-" + guest.dataset.order).classList.remove("hidden");
          } else {
            cleanGuestDetails(form.elements, guest.dataset.order);
          }
        });

        // Clean message text
        form.elements.message.value = null;

        // re-add contact required conditions
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
    elements["allergies"][order].value = null;

    // remove required conditions
    elements["name"][order].required = false;

    // hide the whole section
    document.querySelector("#guest-" + order).classList.add("hidden");
  };

  return isPageReady ? (
    <div>
      <Head>
        <title>{t("title")}</title>
      </Head>

      <Header />
      <div className="px-3">
        <div className="flex flex-col items-center py-4 space-y-2">
          <h2 className="text-center">
            {t("h2-hello", { family_name: invitationQuery.family_name })}
          </h2>
          {/* TODO: work on singular-plural */}
          <p>{t("p1-plural", { max_assistance: invitationQuery.max_assistance })}</p>
        </div>
        <form onSubmit={handleSubmitInvitation} className="flex flex-col space-y-4 pb-4">
          <Select
            label={t("select-confirm")}
            onChange={(e) => setAssistance(parseInt(e.target.value))}
            defaultValue={assistance}
            name="assistance"
          >
            {[...Array(invitationQuery.max_assistance + 1)].map((v, idx) => (
              <option key={idx} value={idx}>
                {idx === 0
                  ? t("select-no-assist")
                  : idx + (idx === 1 ? t("select-assist-singular") : t("select-assist-plural"))}
              </option>
            ))}
          </Select>

          <div id="guests-contact-details">
            <div className="space-y-4">
              <p>{t("phone-desc")}</p>
              <Input
                name="primary_phone"
                label={t("primary-phone")}
                type="number"
                pattern="[0-9]*"
                defaultValue={invitationQuery.primary_phone}
                required
              ></Input>
              <Input
                name="secondary_phone"
                label={t("secondary-phone")}
                type="number"
                pattern="[0-9]*"
                defaultValue={invitationQuery.secondary_phone}
              ></Input>
              <p>{t("email-desc")}</p>
              <Input
                name="email"
                label="Email"
                type="email"
                defaultValue={invitationQuery.email}
              ></Input>
            </div>
          </div>

          <Divider />

          <div id="no-guest-message" className="space-y-4 hidden">
            <div className="flex flex-col items-center">
              <video className="mb-5" width="288" height="288" loop playsInline muted autoPlay>
                <source src="/videos/sad-kid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>{t("no-assist-message")}</p>
            </div>
            <Input
              name="message"
              label={t("message-label")}
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
                title={t("guest-title") + (idx + 1)}
                guestData={invitationQuery.guests[idx]}
              ></GuestForm>
            ))}
          </div>

          <Button className="place-self-center" type="submit" disabled={isConfirmButtonBlocked}>
            {t("confirm-button1")}
          </Button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}
