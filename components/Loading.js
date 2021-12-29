import Image from "next/image";
import Header from "./Header";

const Loading = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center space-y-4 p-4">
        <Image
          src="/images/global/loading-heart.svg"
          alt="Coraz&oacute;n palpitando"
          width="100"
          height="100"
        />
        <h2>Buscando invitaci&oacute;n...</h2>
      </div>
    </div>
  );
};

export default Loading;
