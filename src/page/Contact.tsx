import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    message: "",
  });
  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="p-6">
      <div className="lg:max-w-6xl md:max-w-lg m-auto py-12">
        <div className="">
          <div className="lg:w-[60%]">
            <h1 className="font-black text-[#3E4958] text-4xl lg:text-6xl">
              What can we HELP you with today?
            </h1>
          </div>
          <div className="flex lg:flex-row flex-col justify-between">
            <div className="lg:w-1/2 w-full ">
              <div className="lg:w-2/3 mt-8">
                {/* Name */}
                <div>
                  <Input
                    size="large"
                    placeholder="Name"
                    value={form?.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="placeholder:text-primary bg-transparent"
                  />
                </div>
                {/* Email */}
                <div className="mt-4">
                  <Input
                    size="large"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="placeholder:text-primary bg-transparent"
                  />
                </div>
                {/* Organisation */}
                <div className="mt-4">
                  <Input
                    size="large"
                    placeholder="Organisation"
                    value={form.organisation}
                    onChange={(e) =>
                      handleChange("organisation", e.target.value)
                    }
                    className="placeholder:text-primary bg-transparent"
                  />
                </div>
                {/* message */}
                <div className="mt-4">
                  <TextArea
                    autoSize={false}
                    size="large"
                    placeholder="Message"
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="placeholder:text-primary resize-none bg-transparent"
                  />
                </div>

                <button className="mt-4 bg-primary text-white px-6 w-full p-2 rounded-lg">
                  Submit
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 lg:mt-0 mt-8">
              <h3 className="font-bold text-2xl text-primary">
                Connect with us
              </h3>
              {/* Email */}
              <div className="flex items-center gap-4 mt-4 ">
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <FaEnvelope color={"white"} />
                </span>
                <p className="font-bold text-primary">simtechvr@gmail.com</p>
              </div>
              {/* number */}
              <div className="flex items-center gap-4 mt-4 ">
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <FaPhoneAlt color={"white"} />
                </span>
                <p className="font-bold text-primary">+91 9841646375</p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 mt-4 ">
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <FaLocationArrow color={"white"} />
                </span>
                <div className="">
                  <p className="font-bold text-lg text-primary">India</p>
                  <p className="">
                    IIT Madras Research Park, Kanagam Road, Tharamani, Chennai
                    600113
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
