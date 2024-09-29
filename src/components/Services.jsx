import services from "../assets/services.jpeg";
const Services = () => {
  return (
    <div className="bg-[#FFFBF0] py-4">
      <div className="max-w-[1340px] mx-auto py-16 lg:py-8 lg:flex md:justify-between gap-20">
        <div className="flex md:w-[500px] md:h-[400px] flex-col gap-5 items-center">
          <div
            className="w-[250px]  md:w-[489px] hover:bg-slate-100 border flex justify-center
          items-center py-2 bg-white md:h-[135px] rounded-xl"
          >
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-[20px] md:text-[24px] text-center py-2 cursor-pointer hover:underline">
                Find the Perfect Fit
              </h1>
              <p className="text-[16px] font-normal text-center">
                Everybody id different, which is why we <br /> offer styles for
                every body.
              </p>
            </div>
          </div>
          <div
            className="w-[250px]  md:w-[489px] hover:bg-slate-100 border flex justify-center
          items-center py-2 bg-white md:h-[135px] rounded-xl"
          >
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-[20px] md:text-[24px] text-center py-2 cursor-pointer hover:underline">
                Find the Perfect Fit
              </h1>
              <p className="text-[16px] font-normal text-center">
                Everybody id different, which is why we <br /> offer styles for
                every body.
              </p>
            </div>
          </div>
          <div
            className="w-[250px]  md:w-[489px] hover:bg-slate-100 border flex justify-center
          items-center py-2 bg-white md:h-[135px] rounded-xl"
          >
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-[20px] md:text-[24px] text-center py-2 cursor-pointer hover:underline">
                Find the Perfect Fit
              </h1>
              <p className="text-[16px] font-normal text-center">
                Everybody id different, which is why we <br /> offer styles for
                every body.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-[300px] h-[400px] md:w-full mt-5 md:h-[300px] 
        lg:h-full lg:mt-0 object-cover rounded-md cursor-pointer"
        >
          <img
            src={services}
            alt=""
            className="w-full object-contain md:w-[700px] h-full cursor-pointer rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
