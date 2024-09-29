import { FaCartShopping } from "react-icons/fa6";
import headerImg from "../assets/header.jpeg";
const Hero = () => {
  return (
    <div className="bg-[#FFFBF0] mx-4">
      <div className="lg:max-w-[1340px] mx-auto py-12 flex flex-col justify-between items-center md:flex-row md:max-w-[740px] max-w-[350px]">
        <div className="flex flex-col gap-5 py-4 md:w-1/2">
          <h1 className=" md:text-[30px] text-[20px]  lg:text-[80px] cursor-pointer font-medium font-serif text-[#FABE4C] leading-[40px] md:leading-[80px]">
            Be the Penguins <span className="py-1 text-black">of Winter</span>
          </h1>
          <p className=" md:text-[17px] md:font-normal text-[#3E3E3E] font-normal text-[16px] font-mono py-2 mb-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            dolores recusandae hic odit quisquam. Minus.
          </p>
          <button
            className="flex  justify-center items-center gap-4 h-[50px] px-4 md:w-[170px] md:rounded-lg
          w-[150px] bg-[#A4BC46] rounded-md hover:bg-black hover:text-white"
          >
            <FaCartShopping size={18} />
            <span className="text-center text-[15px] uppercase text-white md:text-[17px] font-normal">
              Buy now
            </span>
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={headerImg} alt="" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
