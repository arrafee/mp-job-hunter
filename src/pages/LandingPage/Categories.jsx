import { Link } from "react-router-dom";
import { CardCategories } from "../../components/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

const Categories = () => {
  return (
    <>
      <div className="bg-[#B0F7DF] px-20 py-8">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-[2rem] text-[#333333]">
            Explore by <span className="text-[#10B981]">categories</span>
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
          <div className="flex flex-wrap justify-center w-11/12 gap-16">
            <CardCategories />
            <CardCategories />
            <CardCategories />
            <CardCategories />
            <CardCategories />
            <CardCategories />
            <CardCategories />
            <CardCategories />
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
