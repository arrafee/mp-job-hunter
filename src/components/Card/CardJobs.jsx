import jobImage from "../../assets/images/job-image.png";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineCompress } from "react-icons/ai";
import { Link } from "react-router-dom";

const CardJobs = () => {
  return (
    <>
      <Link to={"/detail-job"}>
        <div className="flex items-center bg-white shadow-2xl rounded-lg flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 px-3">
          <div className="flex justify-center items-center">
            <img
              className="object-cover rounded-t-lg w-24 md:rounded-none md:rounded-l-lg"
              src={jobImage}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <p className="text-[#5F5858] text-sm whitespace-nowrap">
              Match Company Limited
            </p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white whitespace-nowrap">
              Fresher UI/UX Designer
            </h5>
            <div className="flex gap-4 mb-3 font-normal text-gray-700 dark:text-gray-400">
              <span className="flex items-center gap-1 text-sm whitespace-nowrap">
                <IoLocationOutline className="inline text-[#10B981]" /> New
                York, Amerika Serikat
              </span>
              <span className="flex items-center gap-1 text-sm whitespace-nowrap">
                <AiOutlineCompress className="inline text-[#10B981]" /> Full
                Time
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-3 font-normal text-gray-700 dark:text-gray-400">
              <span className="p-1 px-3 border border-black rounded-[20px] text-[12px]">
                HTML
              </span>
              <span className="p-1 px-3 border border-black rounded-[20px] text-[12px]">
                CSS
              </span>
              <span className="p-1 px-3 border border-black rounded-[20px] text-[12px]">
                Javascript
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardJobs;
