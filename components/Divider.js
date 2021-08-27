import Image from "next/image";

const Divider = () => {
  return (
    <div className="place-self-center">
      <Image
        alt="Divisor"
        src="/images/global/section-divider@3x.png"
        width="300"
        height="29.56"
        layout="fixed"
      />
    </div>
  );
};

export default Divider;
