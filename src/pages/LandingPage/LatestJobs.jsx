import { CardJobs } from "../../components/Card";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const LatestJobs = () => {
  return (
    <>
      <div>
        <div className="px-20 py-8">
          <div className="flex justify-between items-center">
            <div className="font-semibold text-[2rem] text-[#333333]">
              Latest <span className="text-[#10B981]">jobs open</span>
            </div>
            <Link to={"find-jobs"}>
              <div className="flex justify-between items-center gap-3 text-[#333333]">
                <div className="text-[1rem]">Show all jobs </div>
                <div>
                  <AiOutlineArrowRight />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center py-14">
            <div className="flex flex-wrap justify-center w-11/12 gap-y-12 gap-x-48">
              <CardJobs />
              <CardJobs />
              <CardJobs />
              <CardJobs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestJobs;
