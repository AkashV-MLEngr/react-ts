import image from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import { Carousel } from "antd";

const Section4 = () => {
  return (
    <div className="p-6 lg:py-16">
      <div className="max-w-6xl m-auto flex lg:flex-row flex-col justify-between items-center">
        <div className="w-full lg:w-[60%]">
          <h1 className="text-4xl lg:text-6xl text-primary font-bold">
            Powered by Stalwarts of innovation
          </h1>
          <p>
            Our technology has left an everlasting mark of trust on
            professionals across the globe
          </p>
        </div>
        <div className="w-full lg:w-2/5 py-2 lg:p-2">
          <Carousel autoplay>
            <div className="">
              <img src={image} className="w-full h-full rounded-lg" />
            </div>
            <div>
              <img src={image2} className="w-full  h-full rounded-lg" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Section4;
