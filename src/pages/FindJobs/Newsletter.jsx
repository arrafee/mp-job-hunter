/* eslint-disable react/prop-types */
import { BsSearch } from "react-icons/bs";
const NewsLetter = ({ changeFilterSearch, onClickDataFilter }) => {
  const onChange = (e) => {
    const { value } = e.target;
    changeFilterSearch(value);
  };

  return (
    <>
      <div className="text-center font-semibold text-[2.5rem]">
        Discover more than <span className="text-[#10B981]">5000+ jobs</span>
      </div>
      <div className="flex justify-center ">
        <form action="" className="flex gap-8 mt-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BsSearch />
            </div>
            <input
              type="text"
              className="rounded-[10px] border-[#333333] px-8 w-full"
              placeholder="Enter jobs title keyword"
              onChange={(e) => onChange(e)}
            />
          </div>
          <button
            type="button"
            className="py-2 px-8 rounded-[10px] text-white bg-[#10B981]"
            onClick={(e) => onClickDataFilter(e)}
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default NewsLetter;
