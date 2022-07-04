import { createContext, useState } from "react";

const AppContext = createContext({
  invitationQuery: {},
  setInvitationQuery: () => {},
  currentGalleryPhoto: {},
  setCurrentGalleryPhoto: () => {},
  currentPhotoIdx: {},
  setCurrentPhotoIdx: () => {},
  galleryLength: {},
  setGalleryLength: () => {},
  prepareInivitationInput: (form) => {},
});

export const AppContextProvider = ({ children }) => {
  const [invitationQuery, setInvitationQuery] = useState();
  const [currentGalleryPhoto, setCurrentGalleryPhoto] = useState();
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);
  const [galleryLength, setGalleryLength] = useState(0);

  const prepareInivitationInput = (form) => {
    let guests;

    if (Array.from(form.guests).length > 0) {
      guests = Array.from(form.guests).map((g, idx) => {
        return {
          name: form.name[idx].value,
          diet: form.diet[idx].value,
          allergies: form.allergies[idx].value,
        };
      });
    } else {
      guests = [
        {
          name: form.name.value,
          diet: form.diet.value,
          allergies: form.allergies.value,
        },
      ];
    }

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
    currentGalleryPhoto,
    setCurrentGalleryPhoto,
    currentPhotoIdx,
    setCurrentPhotoIdx,
    galleryLength,
    setGalleryLength,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContext;
