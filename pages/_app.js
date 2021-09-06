import Head from "next/head";
import { AppContextProvider } from "../util/AppContext";
import { RealmContextProvider } from "../util/RealmContext";
import { RealmApolloContextProvider } from "../util/RealmApolloContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta property="og:title" content="Boda Jordan &amp; Vero" />
        <meta property="og:description" content="Marzo 19, 2022. Guadalajara, Jalisco." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jordanyvero.com" />

        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <RealmContextProvider appId={process.env.NEXT_PUBLIC_REALM_APP_ID}>
        <RealmApolloContextProvider
          apiKey={process.env.NEXT_PUBLIC_API_KEY}
          uri={process.env.NEXT_PUBLIC_REALM_URI}
        >
          <AppContextProvider>
            <Component {...pageProps} />
          </AppContextProvider>
        </RealmApolloContextProvider>
      </RealmContextProvider>
    </div>
  );
}

export default MyApp;
