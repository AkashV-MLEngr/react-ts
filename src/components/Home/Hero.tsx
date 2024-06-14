import vid from "../../assets/video.mp4";
const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <video
        muted
        loop
        autoPlay
        src={vid}
        className="w-full h-full object-cover absolute inset-0 bg-none"
      >
        <source src={vid} type="video/mp4" />
      </video>
      <div className="z-max absolute inset-0 flex flex-col items-center justify-center bg-opacity-30 bg-black h-full w-full">
        <div className="text-center text-white">
          <h1 className="font-bold text-4xl md:text-6xl">
            Virtual Reality For <br /> Engineering
          </h1>{" "}
          <p className="mt-4">Welcome to the future of engineering training</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
