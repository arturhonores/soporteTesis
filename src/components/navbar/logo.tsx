import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/soporte-tesis.webp"
      width={180}
      height={50}
      priority={true}
      alt="logo-soporte-tesis"
    ></Image>
  );
};
export default Logo;
