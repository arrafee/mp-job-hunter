// import jobImage from "../../assets/images/job-image.png";
// import { IoLocationOutline } from "react-icons/io5";

import { CardJobs } from "../../components/Card";

// import { AiOutlineCompress } from "react-icons/ai";
const ListJobs = () => {
  return (
    <div className="w-full md:w-9/12 px-5">
      <div>
        <p className="text-[1.1rem] font-bold">All Jobs</p>
        <p className="text-[14px] text-[#585858]">Showing 22 results</p>
      </div>
      <div className="flex flex-col gap-6 mt-6">
        <CardJobs />
        <CardJobs />
        <CardJobs />
        <CardJobs />
      </div>
    </div>
  );
};

export default ListJobs;
