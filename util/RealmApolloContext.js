import { useState, useEffect, useContext } from "react";
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";
import RealmAppContext from "./RealmContext";
import * as Realm from "realm-web";

const createRealmApolloClient = (app, apiKey, uri) => {
  const link = new HttpLink({
    uri: uri,
    fetch: async (uri, options) => {
      if (!app.currentUser) {
        await app.logIn(Realm.Credentials.apiKey(apiKey));

        if (!app.currentUser) {
          throw new Error("Must be logged in to use the GraphQL API");
        }
      }

      await app.currentUser.refreshCustomData();
      options.headers.Authorization = `Bearer ${app.currentUser.accessToken}`;

      return fetch(uri, options);
    },
  });

  return new ApolloClient({ link, cache: new InMemoryCache({ addTypename: false }) });
};

export const RealmApolloContextProvider = ({ apiKey, uri, children }) => {
  const realmCtx = useContext(RealmAppContext);
  const [client, setClient] = useState(createRealmApolloClient(realmCtx.app, apiKey, uri));

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
