import image from "../../assets/headgear.png";
const DemoPreview = () => {
  return (
    <div className="p-4">
      <div className="max-w-6xl m-auto flex lg:flex-row flex-col gap-4 items-center">
        <div className="lg:w-1/2 w-full">
          <h1 className="text-4xl lg:text-6xl text-[#3E4958] font-bold">
            We're designing the future of engineering training
          </h1>
        </div>
        <div className="lg:w-1/2">
          <img src={image} className="w-full  h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default DemoPreview;
