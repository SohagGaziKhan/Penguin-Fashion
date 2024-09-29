import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import women1 from "../assets/products.jpeg";
import women2 from "../assets/products2.jpeg";
import women3 from "../assets/products3.jpeg";
import women4 from "../assets/products4.jpeg";
import Slider from "react-slick";
import { FaCartShopping } from "react-icons/fa6";
const WomenProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const womenProducts = [
    { id: 1, img: women1, title: "Yellow Coat Jacket", price: "$125" },
    { id: 1, img: women2, title: "Yellow Coat Jacket", price: "$785" },
    { id: 1, img: women3, title: "Yellow Coat Jacket", price: "$532" },
    { id: 1, img: women4, title: "Yellow Coat Jacket", price: "$451" },
    { id: 1, img: women1, title: "Yellow Coat Jacket", price: "$462" },
  ];
  return (
    <div className="max-w-[1340px] mx-auto py-4">
      <div>
        <h1 className="text-[24px] md:text-[48px] py-8 cursor-pointer font-medium font-mono text-[#97b325]">
          Women Jacket
        </h1>
      </div>
      <Slider {...settings}>
        {womenProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col justify-center items-center gap-2  "
          >
            <div
              className="w-[300px] h-[550px]  md:h-[520px] items-center 
            shadow-lg border flex flex-col px-4 bg-[#ffffff] rounded-lg"
            >
              <div className="w-full h-[293px] mx-auto cursor-pointer gap-5">
                <img
                  src={product.img}
                  alt={product.title}
                  className="object-contain rounded-md cursor-pointer w-full h-[290px] "
                />
              </div>
              <div className="flex flex-col px-4 py-8">
                <h1 className=" text-lg md:text-xl font-semibold hover:underline underline-offset-8 cursor-pointer">
                  {product.title}
                </h1>
                <p className="text-[16px] font-medium py-4 mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="flex justify-between gap-4 ">
                  <h1 className="text-[25px] font-bold text-[#fbb228]">
                    {product.price}
                  </h1>
                  <button className="flex hover:bg-black hover:text-white justify-center items-center gap-2 h-[30px] w-[140px] bg-[#97b325] rounded-md">
                    <FaCartShopping
                      size={18}
                      className="text-center text-white"
                    />
                    <span className="text-center text-[16px] uppercase text-white">
                      Buy Now
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WomenProducts;
