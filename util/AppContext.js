import { createContext, useState } from "react";

const AppContext = createContext({
  invitationQuery: {},
  setInvitationQuery: () => {},
  prepareInivitationInput: (form) => {},
});

export const AppContextProvider = ({ children }) => {
  const [invitationQuery, setInvitationQuery] = useState();

  const prepareInivitationInput = (form) => {
    const guests = Array.from(form.guests).map((g, idx) => {
      return {
        name: form.name[idx].value,
        diet: form.diet[idx].value,
        allergies: form.allergies[idx].value,
      };
    });

    return {
      email: form.email.value,
      primary_phone: form.primary_phone.value,
      secondary_phone: form.secondary_phone.value,
      last_update_date: new Date().toISOString(),
      assistance: form.assistance.value,
      submitted: true,
      guests: guests,
      message: form.message.value,
    };
  };

  const context = {
    invitationQuery,
    setInvitationQuery,
    prepareInivitationInput,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContext;
