import { BsChevronDown } from "react-icons/bs";
const FilterJobs = () => {
  return (
    <div className="w-3/12 md:block hidden px-5">
      <div className="px-14">
        <div className="flex justify-between items-center font-bold text-[#333333] text-[1.1rem]">
          <p>Job Type</p>
          <p>
            <BsChevronDown />
          </p>
        </div>
        <div className="mt-2">
          <div className="flex items-center mb-2">
            <input
              id="default-checkbox"
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 text-[#10B981] bg-gray-100 border-[#10B981] border-2 rounded focus:ring-[#10B981]"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Full Time
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              defaultChecked=""
              id="checked-checkbox"
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 text-[#10B981] bg-gray-100 border-[#10B981] border-2 rounded focus:ring-[#10B981]"
            />
            <label
              htmlFor="checked-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Part Time
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              defaultChecked=""
              id="checked-checkbox"
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 text-[#10B981] bg-gray-100 border-[#10B981] border-2 rounded focus:ring-[#10B981]"
            />
            <label
              htmlFor="checked-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remote
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              defaultChecked=""
              id="checked-checkbox"
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 text-[#10B981] bg-gray-100 border-[#10B981] border-2 rounded focus:ring-[#10B981]"
            />
            <label
              htmlFor="checked-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Contract
            </label>
          </div>
        </div>
      </div>
      <div className="px-14 mt-8">
        <div className="flex justify-between items-center font-bold text-[#333333] text-[1.1rem]">
          <p>Job Categories</p>
          <p>
            <BsChevronDown />
          </p>
        </div>
        <div className="mt-2">
          <div className="flex items-center mb-2">
            <input
              id="default-checkbox"
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 text-[#10B981] bg-gray-100 border-[#10B981] border-2 rounded focus:ring-[#10B981]"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Full Time
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              defaultChecked=""
              id="checked-checkbox"
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 text-[#10B981] bg-gray-100 border-[#10B981] border-2 rounded focus:ring-[#10B981]"
            />
            <label
              htmlFor="checked-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Part Time
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              defaultChecked=""
              id="checked-checkbox"
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 text-[#10B981] bg-gray-100 border-[#10B981] border-2 rounded focus:ring-[#10B981]"
            />
            <label
              htmlFor="checked-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remote
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              defaultChecked=""
              id="checked-checkbox"
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 text-[#10B981] bg-gray-100 border-[#10B981] border-2 rounded focus:ring-[#10B981]"
            />
            <label
              htmlFor="checked-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Contract
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterJobs;
