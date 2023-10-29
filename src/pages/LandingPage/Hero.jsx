import heroImage from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <>
      <div className="flex justify-between mx-auto py-10 px-20">
        <div className="w-6/12 pt-8">
          <div className="text-[5.5rem] text-[#333333] font-semibold leading-tight">
            Your Dream <span className="text-[#10B981]">Job Is Waiting</span>
          </div>
          <div className="text-[4rem] text-[#333333] font-semibold">
            5000+ Jobs
          </div>
          <div className="relative">
            <form action="">
              <input
                type="text"
                placeholder="Search by job title......"
                className="rounded-[20px] border-[#10B981] py-[9px] px[10px] pl-5 pr-24 w-full"
              />
              <button
                type="button"
                className="absolute bottom-0 right-0 py-[10px] px-[15px] bg-[#10B981] text-white rounded-[20px]"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center w-6/12">
          <figure>
            <img src={heroImage} alt="" width={503} height={496} />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Hero;
