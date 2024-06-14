import image from "../../assets/headgear.png";

const KnowMorePreview = () => {
  return (
    <div className="p-6 bg-gray-100 ">
      <div className="max-w-6xl m-auto flex lg:flex-row flex-col-reverse justify-between items-center">
        <div className="w-full lg:w-1/2">
          <img src={image} className="w-full h-full object-contain" />
        </div>{" "}
        <div className="w-full lg:w-2/5">
          <h1 className="lg:text-6xl text-4xl text-[#3E4958]  font-bold">
            UpSkill every engineering professional
          </h1>
          <p className="text-lg mt-4 text-textPrimary font-medium">
            Be a part of our mission and join us in transforming training with
            ground breaking solution
          </p>
        </div>
      </div>
    </div>
  );
};

export default KnowMorePreview;
