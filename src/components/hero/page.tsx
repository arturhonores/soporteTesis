import Image from "next/image";
const Hero = () => {
  return (
    <section className="max-w-7xl m-auto overflow-x-hidden py-16 px-4">
      <div className="flex flex-col lg:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-4xl font-bold text-center lg:text-left md:text-5xl lg:text-6xl">
            Expertos en Elaboración de Tesis
          </h1>
        </div>
        <Image
          src="/hero-svg.svg"
          width={800}
          height={500}
          priority={true}
          alt="logo-soporte-tesis"
        ></Image>
      </div>
    </section>
  );
};
export default Hero;
