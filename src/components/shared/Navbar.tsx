import { Dropdown } from "antd";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { NavLinks } from "../../data/static";

const Navbar = () => {
  const location = useLocation();
  return (
    <div
      className={`${
        location.pathname !== "/" && "bg-gray-50"
      } px-4 sticky top-0 z-10`}
    >
      <div className="flex items-center text-white w-full lg:max-w-6xl md:max-w-3xl sm:max-w-xl m-auto py-6 justify-between">
        <Link to={"/"}>
          <p
            className={`${
              location.pathname !== "/" && "text-primary"
            } font-bold text-lg`}
          >
            SIMTECHVR
          </p>{" "}
        </Link>
        <div className="hidden text-lg lg:w-1/2 w-full font-medium text-white sm:flex justify-between">
          {NavLinks.map((item) => (
            <div
              key={item.name}
              className={`${
                location.pathname !== "/" && "text-primary"
              } text-base hover:border-b-2 border-white`}
            >
              <Link to={item.path} className="">
                <span>{item.name}</span>
              </Link>
            </div>
          ))}
        </div>
        <Dropdown>
          <FaBars size={20} className="font-medium cursor-pointer sm:hidden " />
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
