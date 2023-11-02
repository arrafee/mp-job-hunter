import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div className="flex justify-between mx-auto py-10 px-20">
        <div className="w-6/12 pt-8">
          <div
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-delay={500}
          >
            <div className="text-[5.5rem] text-[#333333] font-semibold leading-tight">
              Your Dream <span className="text-[#10B981]">Job Is Waiting</span>
            </div>
            <div className="text-[4rem] text-[#333333] font-semibold">
              5000+ Jobs
            </div>
          </div>
          <div
            className="mt-5"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-delay={1000}
          >
            <Link
              to={"find-jobs"}
              className="py-[10px] px-[30px] bg-[#10B981] text-white rounded-[20px]"
            >
              Get Jobs
            </Link>
          </div>
        </div>
        <div
          className="flex items-center justify-center w-6/12"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-delay={750}
        >
          <figure>
            <img src={heroImage} alt="" width={503} height={496} />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Hero;
