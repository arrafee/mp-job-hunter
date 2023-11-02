/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import jobImage from "../../assets/images/job-image.png";
// import { IoLocationOutline } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { CardJobs } from "../../components/Card";
import { useEffect, useState } from "react";
import { getJobs } from "../../redux/actions/jobs";
import { json } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const ListJobs = ({
  keyword,
  dataFilterSearch,
  filterCategories,
  filterTypes,
}) => {
  const dispatch = useDispatch();
  const categories = filterCategories;
  const types = filterTypes;
  const dataSearch = dataFilterSearch;
  const jobs = useSelector((state) => state.jobs.jobs);
  const [dataFilter, setDataFiler] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 2;

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  useEffect(() => {
    setDataFiler(jobs);
  }, [jobs]);

  // useEffect(() => {
  //   let dataJobs = dataFilter;
  //   if (types.length > 0) {
  //     // console.log("Filter Types");
  //     dataJobs = dataFilter.filter((item) => types.includes(item.jobType));
  //   }
  //   if (categories.length > 0) {
  //     // console.log("Filter Categories");
  //     // console.log(dataJobs);
  //     dataJobs = dataFilter.filter((item) =>
  //       categories.includes(item.jobCategory)
  //     );
  //   }
  //   console.log(dataJobs);
  // }, [types, categories, dataFilter]);
  useEffect(() => {
    let dataJobs = jobs;
    // let filter = [];
    // if (types.length > 0 || categories > 0) {
    //   dataJobs.map((item) => {
    //     if (
    //       types.includes(item.jobType) ||
    //       categories.includes(item.jobCategories)
    //     ) {
    //       filter.push(item);
    //     }
    //   });
    // } else {
    //   filter = dataJobs;
    // }
    const filter = dataJobs.filter(
      (item) =>
        (types.length === 0 || types.includes(item.jobType)) &&
        (categories.length === 0 || categories.includes(item.jobCategory))
    );
    setDataFiler(filter);
  }, [types, categories, dataFilter]);

  // Hitung total halaman berdasarkan jumlah pekerjaan per halaman
  const totalPages = Math.ceil(dataFilter.length / jobsPerPage);

  // Hitung indeks mulai dan akhir pekerjaan untuk halaman saat ini
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;

  // Menampilkan pekerjaan sesuai halaman saat ini
  const currentJobs = dataFilter.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="w-full md:w-9/12 px-5">
      <div>
        <p className="text-[1.1rem] font-bold">All Jobs</p>
        <p className="text-[14px] text-[#585858]">Showing 22 results</p>
      </div>
      <div className="flex flex-col gap-6 mt-6">
        {/* {dataSearch.length > 0 ? (
          dataSearch.map((item) => <CardJobs key={item.id} job={item} />)
        ) : (
          <></>
        )} */}
        {dataSearch.length > 0 && keyword !== "" ? (
          dataSearch.map((item) => <CardJobs key={item.id} job={item} />)
        ) : dataSearch.length == 0 && keyword !== "" ? (
          <div className="flex flex-col gap-2 items-center justify-center text-[1.5rem]">
            <div className="text-[3rem]">
              <BsSearch />
            </div>
            <div className="text-[#10B981]">{`"${keyword}"`}</div>
            <div>Data Tidak ditemukan</div>
          </div>
        ) : dataFilter.length > 0 ? (
          dataFilter.map((item) => <CardJobs key={item.id} job={item} />)
        ) : (
          <div className="flex flex-col gap-2 items-center justify-center text-[1.5rem]">
            <div className="text-[#10B981]">Data Job</div>
            <div>Tidak tersedia</div>
          </div>
        )}
        {/* <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i + 1} onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ListJobs;
