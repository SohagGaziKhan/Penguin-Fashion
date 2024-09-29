import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa6";

const Reviews = () => {
  const reviews = [
    {
      name: "Harry Mart",
      image:
        "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg",
      description: "Please Like this video and subscripbe Our Youtube Channel",
    },
    {
      name: "Robart To Bird",
      image:
        "https://www.shutterstock.com/image-photo/young-brazilian-man-isolated-on-260nw-2242569333.jpg",
      description: "Please Like this video and subscripbe Our Youtube Channel",
    },
    {
      name: "Roman Plibesks",
      image:
        "https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg",
      description: "Please Like this video and subscripbe Our Youtube Channel",
    },
    {
      name: "Hana Marike ",
      image:
        "https://t3.ftcdn.net/jpg/04/99/52/88/360_F_499528842_p6dwrEOzXN5r2yqPLo8Kxs2hCsEF9687.jpg",
      description: "Please Like this video and subscripbe Our Youtube Channel",
    },
  ];
  return (
    <div className="bg-[#f5ebd0]">
      <div className="max-w-[1340px] mx-auto py-[70px] ">
        <h1 className="text-black text-[30px] lg:text-[55px] py-4 lg:py-8 flex justify-center items-center font-semibold">
          Customer{" "}
          <span className="ml-[15px] text-[#97b325] font-semibold font-mono">
            Reviews
          </span>
        </h1>
        <div className=" w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-5">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-[260px] md:w-[320px] h-[260px] md:h-[320px] rounded-full mx-[15px] flex 
            items-center justify-center relative shadow-lg overflow-hidden transition duration-300 hover:shadow-xl"
            >
              <img
                src={review.image}
                alt=""
                className="w-full h-full object-cover rounded-full transition duration-300"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center bg-black 
              bg-opacity-60 text-white opacity-0 transition-opacity duration-300 hover:opacity-100"
              >
                <h2 className="text-[20px] md:text-[24px] font-bold mb-[15px] ">
                  {review.name}
                </h2>
                <p className="text-[15px] md:text-[17px] font-normal w-[80%] text-center mb-[10px]">
                  {review.description}
                </p>
                <div className="flex space-x-2 mt-3">
                  <FaFacebook className="text-2xl cursor-pointer hover:text-orange-500 transition duration-300" />
                  <FaYoutube className="text-2xl cursor-pointer hover:text-orange-500 transition duration-300" />
                  <FaWhatsapp className="text-2xl cursor-pointer hover:text-orange-500 transition duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
