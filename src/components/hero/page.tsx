const Hero = () => {
  return (
    <section className="max-w-7xl m-auto overflow-x-hidden">
      <div className="">
        <video
          src="/video-hero.mp4"
          autoPlay
          loop
          muted
          className="w-full"
        ></video>
      </div>
    </section>
  );
};
export default Hero;
