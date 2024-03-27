import Image from "next/image";
const Hero = () => {
  return (
    <section className="max-w-7xl m-auto overflow-x-hidden">
      <div className="flex flex-col lg:flex-row md:justify-between">
        <div>
          <h1>Titulo</h1>
        </div>
        {/* <Image
          src="/hero-svg.svg"
          width={800}
          height={500}
          priority={true}
          alt="logo-soporte-tesis"
        ></Image> */}
      </div>
    </section>
  );
};
export default Hero;
