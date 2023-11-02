import { AiOutlineArrowRight } from "react-icons/ai";

const CardCategories = ({ name, icon, jobsCount }) => {
  return (
    <>
      <div className="max-w-md p-6 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
        <img src={icon} className="w-7 h-7" alt="" />
        <a href="#">
          <h5 className="mb-2 text-[1.2rem] font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <div className="flex justify-between gap-5 font-normal text-gray-500 dark:text-gray-400">
          <div className="text-[1rem]">{jobsCount} Jobs available</div>
          <div className="flex justify-center items-center"></div>
        </div>
      </div>
    </>
  );
};

export default CardCategories;
