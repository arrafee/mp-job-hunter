/* eslint-disable no-unused-vars */
import { BsChevronDown } from "react-icons/bs";
// eslint-disable-next-line react/prop-types
const FilterJobs = ({ changeFilterCategories, changeFilterTypes }) => {
  const jobCategory = [
    "Design",
    "Sales",
    "Marketing",
    "Finance",
    "Technology",
    "Engineering",
    "Business",
    "Human Resource",
  ];
  const jobTypes = ["Full Time", "Part Time", "Remote", "Contract"];
  const onChangeValue = (e) => {
    const { name, value } = e.target;
    if (name === "checkboxTypes") {
      changeFilterTypes(value);
    } else {
      changeFilterCategories(value);
    }
  };
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
          {jobTypes.length > 0 ? (
            jobTypes.map((item, index) => (
              <div className="flex items-center mb-2" key={index}>
                <input
                  id={`checkbox-${item}`}
                  name="checkboxTypes"
                  type="checkbox"
                  value={item}
                  className="w-4 h-4 text-[#10B981] bg-gray-100 border-[#10B981] border-2 rounded focus:ring-[#10B981]"
                  onChange={(e) => onChangeValue(e)}
                />
                <label
                  htmlFor={`checkbox-${item}`}
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {item}
                </label>
              </div>
            ))
          ) : (
            <></>
          )}
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
          {jobCategory.length > 0 ? (
            jobCategory.map((item, index) => (
              <div className="flex items-center mb-2" key={index}>
                <input
                  id={`checkbox-${item}`}
                  name="checkboxCategories"
                  type="checkbox"
                  value={item}
                  className="w-4 h-4 text-[#10B981] bg-gray-100 border-[#10B981] border-2 rounded focus:ring-[#10B981]"
                  onChange={(e) => onChangeValue(e)}
                />
                <label
                  htmlFor={`checkbox-${item}`}
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {item}
                </label>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterJobs;
