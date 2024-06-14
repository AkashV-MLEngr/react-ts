interface IPROP {
  title: string;
  text: string;
  img: string;
}
const ServiceCard = ({ title, text, img }: IPROP) => {
  return (
    <div className={`relative border h-56 lg:w-[400px] rounded-lg`}>
      <img src={img} className="inset-0 absolute w-full h-full rounded-lg" />
      <div className="bg-black bg-opacity-40 absolute w-full h-full inset-0">
        <div className="h-full flex flex-col justify-end items-start p-6">
          <div className="text-left">
            <h4 className="font-bold text-2xl text-white">{title}</h4>
            <span className="text-white font-medium">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
