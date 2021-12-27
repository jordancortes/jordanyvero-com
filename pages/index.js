import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [isConfirmButtonBlocked, setIsConfirmButtonBlocked] = useState(false);

  const handleGoToWedding = async (e) => {
    e.preventDefault();

    setIsConfirmButtonBlocked(true);

    router.push({ pathname: "/wedding", query: { code } });
  };

  return (
    <div className="lg:flex lg:h-screen lg:items-center">
      <Head>
        <title>Boda Jordan&amp;Vero</title>
      </Head>

      <div className="flex md:hidden">
        <Image
          src="/images/index/hero.jpg"
          alt="Foto decorada de los novios: Jordan y Vero"
          width="524"
          height="520"
          objectFit="none"
          objectPosition="65% bottom"
        />
      </div>

      <div className="hidden md:flex md:pb-4 lg:w-full lg:-ml-80">
        <Image
          src="/images/index/hero.jpg"
          alt="Foto decorada de los novios: Jordan y Vero"
          width="2691"
          height="2103"
          objectFit="contain"
        />
      </div>

      <div className="flex flex-col space-y-3 items-center px-4 lg:w-1/2 lg:space-y-8">
        <h1 className="text-4xl lg:text-5xl xl:text-7xl text-primary font-cursive font-medium">
          Jordan &amp; Vero
        </h1>

        <div className="flex w-full md:w-3/4 xl:w-1/2">
          <div className="w-full border-b border-secondary self-center"></div>
          <div className="font-light text-secondary uppercase bg-white px-3 lg:text-xl flex-none">
            Save the Date
          </div>
          <div className="w-full border-b border-secondary self-center"></div>
        </div>

        <p className="font-medium text-center text-gray-600 lg:text-xl">
          Marzo 19, 2022
          <br />
          Guadalajara, Jalisco
        </p>

        <form className="flex space-x-3" onSubmit={handleGoToWedding}>
          <Input
            type="text"
            placeholder="C&oacute;digo"
            onChange={(e) => {
              setCode(e.target.value.toUpperCase().trim());
            }}
            required
          ></Input>
          <Button className="flex-shrink-0" disabled={isConfirmButtonBlocked}>
            Ver invitaci&oacute;n
          </Button>
        </form>
      </div>
    </div>
  );
}
