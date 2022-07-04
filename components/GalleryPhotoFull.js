import Button from "../components/Button";
import { useContext, useEffect } from "react";
import AppContext from "../util/AppContext";

const GalleryPhotoFull = ({ gallery }) => {
  const {
    currentPhotoIdx,
    setCurrentPhotoIdx,
    currentGalleryPhoto,
    setCurrentGalleryPhoto,
    galleryLength,
  } = useContext(AppContext);

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (!document.getElementById("gallery-modal").classList.contains("hidden")) {
        // console.log(`You pressed ${e.code}.`, currentPhotoIdx, galleryLength);

        if (e.code == "Escape") {
          handleModalCloseClick();
        } else if (e.code == "ArrowLeft" && parseInt(currentPhotoIdx) > 0) {
          setCurrentPhotoIdx(parseInt(currentPhotoIdx) - 1);
          setCurrentGalleryPhoto(gallery[parseInt(currentPhotoIdx) - 1]);
        } else if (
          e.code == "ArrowRight" &&
          parseInt(currentPhotoIdx) < parseInt(galleryLength) - 1
        ) {
          setCurrentPhotoIdx(parseInt(currentPhotoIdx) + 1);
          setCurrentGalleryPhoto(gallery[parseInt(currentPhotoIdx) + 1]);
        }
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [currentPhotoIdx, setCurrentPhotoIdx, galleryLength]);

  const handleModalCloseClick = async (e) => {
    document.getElementById("gallery-modal").classList.add("hidden");
    setCurrentPhotoIdx(0);
    setCurrentGalleryPhoto();
  };

  const handleModalChevronLeftClick = async (e) => {
    setCurrentPhotoIdx(parseInt(currentPhotoIdx) - 1);
    setCurrentGalleryPhoto(gallery[parseInt(currentPhotoIdx) - 1]);
  };

  const handleModalChevronRightClick = async (e) => {
    // console.log("idx1", currentPhotoIdx);
    setCurrentPhotoIdx(parseInt(currentPhotoIdx) + 1);
    setCurrentGalleryPhoto(gallery[parseInt(currentPhotoIdx) + 1]);
  };

  return (
    <div id={`gallery-modal`} className="absolute inset-0 hidden">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0">
        <div className="flex justify-center items-center min-h-full min-w-content">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex flex-col items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 self-end stroke-current hover:cursor-pointer hover:text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                onClick={handleModalCloseClick}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-current hover:cursor-pointer hover:text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  onClick={handleModalChevronLeftClick}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  className="max-h-vh-10/12"
                  src={`/images/gallery/large/img${parseInt(currentPhotoIdx) + 1}.jpg`}
                ></img>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-current hover:cursor-pointer hover:text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  onClick={handleModalChevronRightClick}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <a
                className="py-2 px-3 bg-primary text-sm text-white font-medium rounded-sm disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-primary-light focus:ring-offset-1 hover:bg-primary-dark no-underline"
                href={`/api/proxy?filename=${currentGalleryPhoto?.full_res_url}`}
                download
              >
                Descargar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPhotoFull;
