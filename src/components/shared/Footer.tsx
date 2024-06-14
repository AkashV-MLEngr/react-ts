// import {
//   FaFacebook,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedin,
//   FaYoutube,
// } from "react-icons/fa";
import { Link } from "react-router-dom";
import { footerLinks2 } from "../../data/static";
const Footer = (): JSX.Element => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString("default", { month: "long" });
  return (
    <footer className="lg:px-32 sm:px-12 px-6 py-12  bg-gray-50">
      <div className="max-w-6xl m-auto flex flex-col gap-12">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex flex-col gap-2 items-start w-full sm:w-2/5">
            <p className="font-bold text-primary text-lg">SIMTECHVR</p>{" "}
            <p className="text-xs text-gray-800 font-medium">
              Designing the future of healthcare training
            </p>
            {/* <div className="flex justify-center items-center space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100084707375092">
                {" "}
                <FaFacebook
                  size={"25px"}
                  className="text-gray-800 hover:text-blue-700 cursor-pointer"
                />
              </a>
              <a href="https://www.instagram.com/prop44dotcom/">
                <FaInstagram
                  size={"25px"}
                  className="text-gray-800 hover:text-pink-700 cursor-pointer"
                />
              </a>
              <a href="https://twitter.com/prop44dotcom">
                <FaTwitter
                  size={"25px"}
                  className="text-gray-800 hover:text-blue-600 cursor-pointer"
                />
              </a>
              <a href="https://www.linkedin.com/company/prop44dotcom">
                <FaLinkedin
                  size={"25px"}
                  className="text-gray-800 hover:text-blue-900 cursor-pointer"
                />
              </a>
              <a href="https://www.youtube.com/@Prop44dotcom">
                <FaYoutube
                  size={"25px"}
                  className="text-gray-800 hover:text-blue-900 cursor-pointer"
                />
              </a>
            </div> */}
          </div>

          <div className="mt-4 sm:mt-0 flex flex-col gap-2 items-start ">
            <h1 className="font-bold text-header sm:text-lg text-base">
              Company
            </h1>
            <ul className="text-xs font-medium text-gray-800 glex flex gap-2">
              {footerLinks2.map((item: { name: string; path: string }) => (
                <li key={item.name}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-between text-xs font-medium text-gray-500">
          <p>
            {" "}
            &copy; {year} SIMTECHVR | {month}
          </p>
          {/* <div className="flex items-center gap-2 sm:gap-8">
            <p>Legal</p>
            <p>Privacy</p>
            <p>Terms &amp; Condition</p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
