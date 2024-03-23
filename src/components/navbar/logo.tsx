import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/soporte-tesis.webp"
        width={180}
        height={50}
        alt="logo-soporte-tesis"
      ></Image>
    </div>
  );
};
export default Logo;
