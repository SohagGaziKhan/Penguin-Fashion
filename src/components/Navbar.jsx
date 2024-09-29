import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <div className="bg-[#FFFBF0] shadow-md py-4">
      <div
        className="md:max-w-[740px] max-w-[350px] lg:max-w-[1340px] 
      mx-auto py-5 px-4 "
      >
        <div className="flex justify-between gap-5 items-center">
          <div>
            <h1
              className="text-xl text-[#A4BC46] font-semibold font-serif
             md:text-2xl lg:text-[35px]"
            >
              Penguin{" "}
              <span className="text-[#363958] cursor-pointer">Fashion</span>
            </h1>
          </div>
          {/* Mobile Menu button */}
          <button className="md:hidden" onClick={handleToggle}>
            <IoMdMenu size={25} />
          </button>
          <ul
            className=" hidden md:flex justify-center gap-5 items-center 
          text-[#3C3C3C] "
          >
            <li
              className="font-medium text-[19px] font-mono cursor-pointer
             hover:underline hover:underline-offset-8"
            >
              Home
            </li>
            <li
              className="font-medium text-[19px] font-mono cursor-pointer
             hover:underline hover:underline-offset-8"
            >
              Products
            </li>
            <li
              className="font-medium text-[19px] font-mono cursor-pointer 
            hover:underline hover:underline-offset-8"
            >
              About Us
            </li>
            <li
              className="font-medium text-[19px] font-mono cursor-pointer 
            hover:underline hover:underline-offset-8"
            >
              Contact Us
            </li>
          </ul>
        </div>
        {/* mobile menu */}
        {show && (
          <ul
            className="md:hidden flex flex-col h-screen text-center gap-4 
          justify-center mt-3 text-[#3C3C3C]"
          >
            <li
              className="font-medium text-[19px] font-mono cursor-pointer
             hover:underline hover:underline-offset-8"
            >
              Home
            </li>
            <li
              className="font-medium text-[19px] font-mono cursor-pointer
             hover:underline hover:underline-offset-8"
            >
              Products
            </li>
            <li
              className="font-medium text-[19px] font-mono cursor-pointer
             hover:underline hover:underline-offset-8"
            >
              About Us
            </li>
            <li
              className="font-medium text-[19px] font-mono cursor-pointer
             hover:underline hover:underline-offset-8"
            >
              Contact Us
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
