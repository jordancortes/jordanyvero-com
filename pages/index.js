import Image from "next/image";
import Head from "next/head";
import { useContext, useEffect, useState, useRef } from "react";
import AppContext from "../util/AppContext";
import Header from "../components/Header";
import GalleryPhotoFull from "../components/GalleryPhotoFull";
import Button from "../components/Button";

export async function getStaticProps() {
  let env;

  // env = process.env.VERCEL_ENV == "development" ? "http://localhost:3000" : "https://jordanyvero.com";

  const res = await fetch("https://f002.backblazeb2.com/file/jordanyvero-com/photos.json");
  const gallery = await res.json();

  return {
    props: {
      gallery: gallery.gallery,
    },
  };
}

export default function Home({ gallery }) {
  const {
    currentPhotoIdx,
    setCurrentPhotoIdx,
    currentGalleryPhoto,
    setCurrentGalleryPhoto,
    setGalleryLength,
  } = useContext(AppContext);
  const isMounted = useRef(false);

  useEffect(() => {
    setGalleryLength(gallery.length);
  }, [gallery, setGalleryLength]);

  useEffect(() => {
    if (isMounted.current) {
      if (currentGalleryPhoto) {
        document.getElementById("gallery-modal").classList.remove("hidden");
      }
    } else {
      isMounted.current = true;
    }
  }, [currentGalleryPhoto]);

  const handlePhotoOnClick = async (e) => {
    setCurrentPhotoIdx(e.target.dataset.idx);
    setCurrentGalleryPhoto(gallery[e.target.dataset.idx]);
  };

  return (
    <div>
      <Head>
        <title>Boda Jordan&Vero | Fotos</title>
      </Head>

      <Header />

      <div className="container mx-auto flex flex-col justify-center mt-4 gap-4 text-center">
        <h2 className="text-primary">¡Gracias por acompañarnos!</h2>
        <div className="flex justify-center">
          <p className={"text-xl"}>Después de grandes momentos, quedan inolvidables recuerdos...</p>
        </div>
        <div className="flex justify-end">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            className="py-2 px-3 bg-primary text-sm text-white font-medium rounded-sm disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-primary-light focus:ring-offset-1 hover:bg-primary-dark no-underline"
            href="/api/proxy?filename=jordanyvero-com/boda_vero_jordan.zip"
            download
          >
            Descargar galería completa
          </a>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
          {gallery.map((photo, idx) => (
            <div key={`key-thumb-${idx + 1}`}>
              <Image
                className="cursor-pointer"
                data-idx={idx}
                src={`/images/gallery/thumb/img${idx + 1}.jpg`}
                alt={`img-thumb-${idx + 1}`}
                width="270"
                height="270"
                onClick={handlePhotoOnClick}
              />
            </div>
          ))}
        </div>
        <GalleryPhotoFull gallery={gallery} />
      </div>
    </div>
  );
}
