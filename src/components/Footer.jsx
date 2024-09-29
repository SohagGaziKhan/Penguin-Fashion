import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const hours = [
    { id: 1, day: "Monday", time: "9:00 AM -11:00 PM" },
    { id: 2, day: "Tuesday", time: "9:00 AM -11:00 PM" },
    { id: 3, day: "Wednesday", time: "9:00 AM -11:00 PM" },
    { id: 4, day: "Thursday", time: "9:00 AM -11:00 PM" },
    { id: 5, day: "Friday", time: "9:00 AM -11:00 PM" },
    { id: 6, day: "Saturday", time: "9:00 AM -11:00 PM" },
  ];
  return (
    <div className="bg-slate-100 text-black shadow-xl">
      <div>
        <footer className="max-w-[1340px] mx-auto py-8 px-4">
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 gap-5">
              <h1
                className="text-xl text-[#A4BC46] font-semibold font-serif
             md:text-2xl lg:text-[35px] py-4"
              >
                Penguin{" "}
                <span className="text-[#363958] cursor-pointer">Fashion</span>
              </h1>
              <p
                className=" md:text-[17px] md:font-normal text-[#3E3E3E] font-normal 
              text-[16px] font-mono py-2 mb-4 "
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestias placeat consequuntur tempora exercitationem et laborum
                itaque inventore assumenda voluptates sed!
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li
                  className="text-gray-700 hover:text-black cursor-pointer 
                hover:underline hover:underline-offset-8"
                >
                  Home
                </li>
                <li
                  className="text-gray-700 hover:text-black cursor-pointer 
                hover:underline hover:underline-offset-8"
                >
                  Products
                </li>
                <li
                  className="text-gray-700 hover:text-black cursor-pointer 
                hover:underline hover:underline-offset-8"
                >
                  About Us
                </li>
                <li
                  className="text-gray-700 hover:text-black cursor-pointer 
                hover:underline hover:underline-offset-8"
                >
                  Contact Us
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h3 className=" text-xl  font-bold mb-4">Hours</h3>
              <ul className="space-y-2">
                {hours.map((element) => (
                  <li
                    key={element.id}
                    className="flex justify-between text-gray-700 cursor-pointer"
                  >
                    <span>{element.day}</span>
                    <span>{element.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="flex-1
            "
            >
              <h3 className="text-xl  font-bold mb-4">Contact Us</h3>
              <div className="flex items-center gap-2 mb-2">
                <FaPhone className="text-gray-700" />
                <span className="text-gray-700">9696-6969-9696</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <IoMdMail className="text-gray-700" />
                <span className="text-gray-700">PleaseLike@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <FaLocationArrow className="text-gray-700" />
                <span className="text-gray-700">Gao,India</span>
              </div>
            </div>
          </div>
        </footer>
        <p className="text-xs md:text-lg cursor-pointer text-center py-4 ">
          &copy;Copyright With ProjectWithSGK . Design By SGK.
        </p>
      </div>
    </div>
  );
};

export default Footer;
