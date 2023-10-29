import Newsletter from "./NewsLetter";
import FilterJobs from "./FiltersJobs";
import ListJobs from "./ListJobs";

const FindJobs = () => {
  return (
    <div className="my-8 px-20">
      <Newsletter />
      <div className="flex mt-8">
        <FilterJobs />
        <ListJobs />
      </div>
    </div>
  );
};

export default FindJobs;
