import { useRouter } from "next/router";
import Button from "./Button";

const Header = ({ withButton, swiperOurStory }) => {
  const router = useRouter();

  const handleGoToInvitation = async () => {
    // prevent autoplay to fail when moving to the next screen
    // (swiper is now undefined in the next screen)
    swiperOurStory.autoplay.stop();

    router.push({ pathname: "/wedding/invitation" });
  };

  const handleGoLanding = async () => {
    router.push({ pathname: "/" });
  };

  return (
    <header className="px-2 py-3 border-b flex justify-between md:px-6 md:py-4">
      <h1 onClick={handleGoLanding} className="text-primary font-cursive text-3xl cursor-pointer">
        J&amp;V
      </h1>
      {withButton ? <Button onClick={handleGoToInvitation}>Confirmar Asistencia</Button> : ""}
    </header>
  );
};

export default Header;
