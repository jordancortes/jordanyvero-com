import Head from "next/head";
import Header from "../components/Header";

export default function Credits() {
  return (
    <div>
      <Head>
        <title>Boda Jordan&amp;Vero | Cr&eacute;ditos</title>
      </Head>

      <Header />

      <div className="flex flex-col px-4 pt-4">
        <h2 className="text-center">Cr&eacute;ditos</h2>
        <h3>Backgrounds</h3>
        <ul className="list-disc list-inside pt-1 pb-4">
          <li>
            <a href="https://www.freepik.com/psd/background">
              Background psd created by BiZkettE1 - www.freepik.com
            </a>
          </li>
          <li>
            <a href="https://www.freepik.com/psd/background">
              Background psd created by denamorado - www.freepik.com
            </a>
          </li>
        </ul>
        <h3>Icons</h3>
        <ul className="list-disc list-inside pt-1 pb-4">
          <li>
            Icons made by{" "}
            <a href="https://www.freepik.com" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </li>
        </ul>
        <h3>Ornaments</h3>
        <ul className="list-disc list-inside pt-1 pb-4">
          <li>
            <a href="https://www.freepik.com/vectors/wedding">
              Wedding vector created by pikisuperstar - www.freepik.com
            </a>
          </li>
        </ul>
        <h3>Brushes</h3>
        <ul className="list-disc list-inside pt-1 pb-4">
          <li>
            <a href="https://www.freepik.com/vectors/banner">
              Banner vector created by rawpixel.com - www.freepik.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
