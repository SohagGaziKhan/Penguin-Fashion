import { FaCartShopping } from "react-icons/fa6";
import product1 from "../assets/products.jpeg";
import product2 from "../assets/products2.jpeg";
import product3 from "../assets/products3.jpeg";
import product4 from "../assets/products4.jpeg";
const Products = () => {
  return (
    <div className="max-w-[1340px] mx-auto py-8">
      <div>
        <h1 className="text-[25px] md:text-[48px] py-8 cursor-pointer font-medium font-serif text-[#97b325]">
          All Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-between items-center">
          {/* Product 1 */}
          <div className="w-[300px] md:w-[320px] h-[550px] md:[500px] items-center shadow-lg flex flex-col px-4 bg-white rounded-lg  hover:bg-[#f1eeee]">
            <div className="w-full h-[283px] mx-auto cursor-pointer gap-5">
              <img
                src={product1}
                alt=""
                className="object-contain rounded-md cursor-pointer w-full h-[290px] hover:bg-[#f1eeee]"
              />
            </div>
            <div className="flex flex-col px-4">
              <h1 className="text-[24px] font-semibold hover:underline hover:underline-offset-8 cursor-pointer py-4">
                Black Jacket
              </h1>
              <p className="font-normal text-[16px] font-serif py-2 mb-4 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                dolorum quis nulla architecto!
              </p>
              <div className="flex justify-between gap-4">
                <h1 className="text-[25px] font-bold text-[#fbb228]">$510</h1>
                <button
                  className="flex justify-center items-center gap-2 h-[40px] w-[140px] 
                bg-[#A4BC46] rounded-md hover:bg-black hover:text-white"
                >
                  <FaCartShopping />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          </div>
          {/* product 2 */}
          <div className="w-[300px] md:w-[320px] h-[550px] md:[500px] items-center shadow-lg flex flex-col px-4 bg-white rounded-lg  hover:bg-[#f1eeee]">
            <div className="w-full h-[283px] mx-auto cursor-pointer gap-5">
              <img
                src={product3}
                alt=""
                className="object-contain rounded-md cursor-pointer w-full h-[290px] hover:bg-[#f1eeee]"
              />
            </div>
            <div className="flex flex-col px-4">
              <h1 className="text-[24px] font-semibold hover:underline hover:underline-offset-8 cursor-pointer py-4">
                Black Jacket
              </h1>
              <p className="font-normal text-[16px] font-serif py-2 mb-4 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                dolorum quis nulla architecto!
              </p>
              <div className="flex justify-between gap-4">
                <h1 className="text-[25px] font-bold text-[#fbb228]">$510</h1>
                <button
                  className="flex justify-center items-center gap-2 h-[40px] w-[140px] 
                bg-[#A4BC46] rounded-md hover:bg-black hover:text-white"
                >
                  <FaCartShopping />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          </div>
          {/* product 3 */}
          <div className="w-[300px] md:w-[320px] h-[550px] md:[500px] items-center shadow-lg flex flex-col px-4 bg-white rounded-lg  hover:bg-[#f1eeee]">
            <div className="w-full h-[283px] mx-auto cursor-pointer gap-5">
              <img
                src={product4}
                alt=""
                className="object-contain rounded-md cursor-pointer w-full h-[290px] hover:bg-[#f1eeee]"
              />
            </div>
            <div className="flex flex-col px-4">
              <h1 className="text-[24px] font-semibold hover:underline hover:underline-offset-8 cursor-pointer py-4">
                Black Jacket
              </h1>
              <p className="font-normal text-[16px] font-serif py-2 mb-4 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                dolorum quis nulla architecto!
              </p>
              <div className="flex justify-between gap-4">
                <h1 className="text-[25px] font-bold text-[#fbb228]">$510</h1>
                <button
                  className="flex justify-center items-center gap-2 h-[40px] w-[140px] 
                bg-[#A4BC46] rounded-md hover:bg-black hover:text-white"
                >
                  <FaCartShopping />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          </div>
          {/* product 4 */}
          <div className="w-[300px] md:w-[320px] h-[550px] md:[500px] items-center shadow-lg flex flex-col px-4 bg-white rounded-lg  hover:bg-[#f1eeee]">
            <div className="w-full h-[283px] mx-auto cursor-pointer gap-5">
              <img
                src={product2}
                alt=""
                className="object-contain rounded-md cursor-pointer w-full h-[290px] hover:bg-[#f1eeee]"
              />
            </div>
            <div className="flex flex-col px-4">
              <h1 className="text-[24px] font-semibold hover:underline hover:underline-offset-8 cursor-pointer py-4">
                Black Jacket
              </h1>
              <p className="font-normal text-[16px] font-serif py-2 mb-4 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                dolorum quis nulla architecto!
              </p>
              <div className="flex justify-between gap-4">
                <h1 className="text-[25px] font-bold text-[#fbb228]">$510</h1>
                <button
                  className="flex justify-center items-center gap-2 h-[40px] w-[140px] 
                bg-[#A4BC46] rounded-md hover:bg-black hover:text-white"
                >
                  <FaCartShopping />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          </div>
          {/* product 5 */}
          <div className="w-[300px] md:w-[320px] h-[550px] md:[500px] items-center shadow-lg flex flex-col px-4 bg-white rounded-lg  hover:bg-[#f1eeee]">
            <div className="w-full h-[283px] mx-auto cursor-pointer gap-5">
              <img
                src={product2}
                alt=""
                className="object-contain rounded-md cursor-pointer w-full h-[290px] hover:bg-[#f1eeee]"
              />
            </div>
            <div className="flex flex-col px-4">
              <h1 className="text-[24px] font-semibold hover:underline hover:underline-offset-8 cursor-pointer py-4">
                Black Jacket
              </h1>
              <p className="font-normal text-[16px] font-serif py-2 mb-4 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                dolorum quis nulla architecto!
              </p>
              <div className="flex justify-between gap-4">
                <h1 className="text-[25px] font-bold text-[#fbb228]">$510</h1>
                <button
                  className="flex justify-center items-center gap-2 h-[40px] w-[140px] 
                bg-[#A4BC46] rounded-md hover:bg-black hover:text-white"
                >
                  <FaCartShopping />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          </div>
          {/* product 6 */}
          <div className="w-[300px] md:w-[320px] h-[550px] md:[500px] items-center shadow-lg flex flex-col px-4 bg-white rounded-lg  hover:bg-[#f1eeee]">
            <div className="w-full h-[283px] mx-auto cursor-pointer gap-5">
              <img
                src={product3}
                alt=""
                className="object-contain rounded-md cursor-pointer w-full h-[290px] hover:bg-[#f1eeee]"
              />
            </div>
            <div className="flex flex-col px-4">
              <h1 className="text-[24px] font-semibold hover:underline hover:underline-offset-8 cursor-pointer py-4">
                Black Jacket
              </h1>
              <p className="font-normal text-[16px] font-serif py-2 mb-4 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                dolorum quis nulla architecto!
              </p>
              <div className="flex justify-between gap-4">
                <h1 className="text-[25px] font-bold text-[#fbb228]">$510</h1>
                <button
                  className="flex justify-center items-center gap-2 h-[40px] w-[140px] 
                bg-[#A4BC46] rounded-md hover:bg-black hover:text-white"
                >
                  <FaCartShopping />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          </div>
          {/* product 7 */}
          <div className="w-[300px] md:w-[320px] h-[550px] md:[500px] items-center shadow-lg flex flex-col px-4 bg-white rounded-lg  hover:bg-[#f1eeee]">
            <div className="w-full h-[283px] mx-auto cursor-pointer gap-5">
              <img
                src={product1}
                alt=""
                className="object-contain rounded-md cursor-pointer w-full h-[290px] hover:bg-[#f1eeee]"
              />
            </div>
            <div className="flex flex-col px-4">
              <h1 className="text-[24px] font-semibold hover:underline hover:underline-offset-8 cursor-pointer py-4">
                Black Jacket
              </h1>
              <p className="font-normal text-[16px] font-serif py-2 mb-4 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                dolorum quis nulla architecto!
              </p>
              <div className="flex justify-between gap-4">
                <h1 className="text-[25px] font-bold text-[#fbb228]">$510</h1>
                <button
                  className="flex justify-center items-center gap-2 h-[40px] w-[140px] 
                bg-[#A4BC46] rounded-md hover:bg-black hover:text-white"
                >
                  <FaCartShopping />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          </div>
          {/* product 8 */}
          <div className="w-[300px] md:w-[320px] h-[550px] md:[500px] items-center shadow-lg flex flex-col px-4 bg-white rounded-lg  hover:bg-[#f1eeee]">
            <div className="w-full h-[283px] mx-auto cursor-pointer gap-5">
              <img
                src={product4}
                alt=""
                className="object-contain rounded-md cursor-pointer w-full h-[290px] hover:bg-[#f1eeee]"
              />
            </div>
            <div className="flex flex-col px-4">
              <h1 className="text-[24px] font-semibold hover:underline hover:underline-offset-8 cursor-pointer py-4">
                Black Jacket
              </h1>
              <p className="font-normal text-[16px] font-serif py-2 mb-4 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                dolorum quis nulla architecto!
              </p>
              <div className="flex justify-between gap-4">
                <h1 className="text-[25px] font-bold text-[#fbb228]">$510</h1>
                <button
                  className="flex justify-center items-center gap-2 h-[40px] w-[140px] 
                bg-[#A4BC46] rounded-md hover:bg-black hover:text-white"
                >
                  <FaCartShopping />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
