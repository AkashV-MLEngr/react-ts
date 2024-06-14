import img from "../assets/image2.jpeg";
const About = () => {
  return (
    <div className="p-6">
      <div className="max-w-lg lg:max-w-6xl m-auto py-12">
        <div className="flex gap-4 lg:flex-row flex-col justify-between items-center">
          <div className="w-full lg:w-[55%]">
            <h1 className="font-black text-[#3E4958] text-4xl md:text-5xl lg:text-6xl">
              A tech-tonic shift <br />
              in engineering training
            </h1>
            <p className="mt-4">
              We had a dream. Now it’s our purpose. We are on a mission to
              design the future of medical training and develop cutting-edge
              simulation technology to bring forth infinite possibilities
            </p>
          </div>
          <div className="w-full lg:w-[45%]">
            <img src={img} className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
