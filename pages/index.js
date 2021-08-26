import Image from "next/image";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Home() {
  return (
    <div className="flex flex-col text-center items-center">
      <Image
        src="/images/index/hero.png"
        alt="Foto decorada de los novios: Jordan y Vero"
        width="1991"
        height="2055"
      />
      <div className="pt-3 pb-6 space-y-4 min-w-9/10">
        <h1 className="text-4xl text-primary font-cursive">
          Jordan &amp; Vero
        </h1>
        <div className="bg-dot bg-repeat-x bg-center">
          <span className="font-light text-secondary uppercase bg-white px-3">
            Save the Date
          </span>
        </div>
        <p className="font-medium text-gray-600">
          Marzo 19, 2022
          <br />
          Guadalajara, Jalisco
        </p>

        <form className="flex flex-col items-center space-y-3">
          <Input
            type="text"
            placeholder="C&oacute;digo"
            className="p-2 w-full"
          ></Input>
          <Button className="w-full">Ver invitaci&oacute;n</Button>
        </form>
      </div>
    </div>
  );
}
