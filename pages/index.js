import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Home() {
  const router = useRouter();

  const handleGoToWedding = async (e) => {
    e.preventDefault();

    router.push({ pathname: "/wedding" });
  };

  return (
    <div className="flex flex-col lg:flex-row text-center items-center align-middle lg:min-h-screen">
      <div className="lg:w-1/2 lg:h-full">
        <Image
          src="/images/index/hero.png"
          alt="Foto decorada de los novios: Jordan y Vero"
          width="768"
          height="792"
        />
      </div>

      <div className="pt-3 pb-6 space-y-4 lg:space-y-8 min-w-9/10 lg:flex-initial lg:min-w-min lg:w-1/2 flex flex-col items-center">
        <h1 className="text-4xl lg:text-6xl text-primary font-cursive">Jordan &amp; Vero</h1>
        <div className="flex w-full">
          <div className="w-full border-b border-secondary self-center"></div>
          <div className="font-light text-secondary uppercase bg-white px-3 lg:text-xl flex-none">
            Save the Date
          </div>
          <div className="w-full border-b border-secondary self-center"></div>
        </div>
        <p className="font-medium text-gray-600 lg:text-xl">
          Marzo 19, 2022
          <br />
          Guadalajara, Jalisco
        </p>

        <form className="flex flex-col space-y-3" onSubmit={handleGoToWedding}>
          <Input type="text" placeholder="C&oacute;digo"></Input>
          <Button>Ver invitaci&oacute;n</Button>
        </form>
      </div>
    </div>
  );
}
