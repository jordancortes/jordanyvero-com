import { createContext, useState } from "react";
import * as Realm from "realm-web";

const RealmContext = createContext();

export const RealmContextProvider = ({ appId, children }) => {
  const [app, setApp] = useState(new Realm.App(appId));

  const [currentUser, setCurrentUser] = useState(app.currentUser);

  const logIn = async (credentials) => {
    await app.logIn(credentials);
    await app.currentUser.refreshCustomData();
    setCurrentUser(app.currentUser);
  };

  const logOut = async () => {
    await app.currentUser?.logOut();
    setCurrentUser(app.currentUser);
  };

  const context = { app, currentUser, logIn, logOut };

  return <RealmContext.Provider value={context}>{children}</RealmContext.Provider>;
};

export default RealmContext;
