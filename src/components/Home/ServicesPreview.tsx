import { Fragment } from "react";
import { services } from "../../data/static";
import ServiceCard from "../ServiceCard";
const ServicesPreview = () => {
  return (
    <div className="p-6 lg:py-16">
      <div className="max-w-6xl m-auto text-center">
        <h1 className="lg:text-6xl text-4xl text-[#3E4958] font-bold">
          Treating People is a <br /> superpower
        </h1>
        <p className="text-xl mt-4 text-textPrimary">
          Our tech helps perfect it
        </p>

        <div className="flex lg:flex-row flex-col justify-center gap-4 mt-8">
          {services.map((item) => (
            <Fragment key={item.label}>
              <ServiceCard title={item.label} text={item.text} img={item.img} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPreview;
