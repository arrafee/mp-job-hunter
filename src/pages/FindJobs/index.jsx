/* eslint-disable no-unused-vars */
import NewsLetter from "./NewsLetter";
import FilterJobs from "./FiltersJobs";
import ListJobs from "./ListJobs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FindJobs = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const [filterCategories, setFilterCategories] = useState([]);
  const [filterTypes, setFilterTypes] = useState([]);
  const [filterSearch, setFilterSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const [dataFilterSearch, setDataFilterSearch] = useState([]);

  const changeFilterSearch = (value) => {
    setFilterSearch(value);
  };

  const onClickDataFilter = (e) => {
    e.preventDefault();
    setDataFilterSearch(
      jobs.filter((item) => item.jobTitle.includes(filterSearch))
    );
    setKeyword(filterSearch);
  };

  const changeFilterCategories = (value) => {
    if (filterCategories.length > 0) {
      if (filterCategories.includes(value)) {
        setFilterCategories(filterCategories.filter((item) => item !== value));
      } else {
        setFilterCategories([...filterCategories, value]);
      }
    } else {
      setFilterCategories([...filterCategories, value]);
    }
  };

  const changeFilterTypes = (value) => {
    if (filterTypes.length > 0) {
      if (filterTypes.includes(value)) {
        setFilterTypes(filterTypes.filter((item) => item !== value));
      } else {
        setFilterTypes([...filterTypes, value]);
      }
    } else {
      setFilterTypes([...filterTypes, value]);
    }
  };

  useEffect(() => {
    console.log(dataFilterSearch);
  }, [dataFilterSearch]);

  return (
    <div className="my-8 px-20">
      <NewsLetter
        changeFilterSearch={changeFilterSearch}
        onClickDataFilter={onClickDataFilter}
      />
      <div className="flex mt-8">
        <FilterJobs
          changeFilterCategories={changeFilterCategories}
          changeFilterTypes={changeFilterTypes}
        />
        <ListJobs
          keyword={keyword}
          dataFilterSearch={dataFilterSearch}
          filterCategories={filterCategories}
          filterTypes={filterTypes}
        />
      </div>
    </div>
  );
};

export default FindJobs;
