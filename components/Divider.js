import Image from "next/image";

const Divider = () => {
  return (
    <div className="flex flex-col items-center">
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
