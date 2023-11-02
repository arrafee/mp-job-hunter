/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import AddJobs from "./AddJobs";
import Sidebar from "../../../components/Sidebar";
import Topbar from "../../../components/Topbar";
import { FiEye } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi2";
import { FiEdit } from "react-icons/fi";
import { TbLayoutGridAdd } from "react-icons/tb";
import { useEffect, useState } from "react";
import axios from "axios";
import EditJobs from "./EditJob";
import { useDispatch, useSelector } from "react-redux";
import { deleteJob, getJobs } from "../../../redux/actions/jobs";
import {
  AlertFailed,
  AlertSuccess,
  ConfirmAlert,
} from "../../../components/Alert";

const Jobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);

  // console.log(dataJobs);

  // const [jobs, setJobs] = useState([]);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  const deleteDataJob = (id) => {
    ConfirmAlert("Apakah anda yakin menghapus data ini?").then((result) => {
      if (result) {
        dispatch(deleteJob(id))
          .then(() => {
            AlertSuccess("Data Job berhasil dihapus");
          })
          .catch((error) => {
            AlertFailed("Data Job gagal dihapus");
            console.log(error);
          });
      }
    });
  };

  return (
    <div className="">
      <div className="flex">
        {/* LEFT SIDE */}
        {/* SIDEBAR */}
        <Sidebar />
        {/* RIGHT SIDE */}
        <div className="md:ml-[22%] xl:ml-[18%] 2xl:ml-[14%] md:w-[78%] xl:w-[82%] 2xl:w-[86%] w-full right-side">
          {/* Topbar */}
          <Topbar />
          {/* MAIN */}
          <section className="pt-5 pb-16 px-10">
            <div className="border-2 border-gray-200 bg-white p-7 rounded shadow-md text-sm">
              <div className="font-bold text-xl">Job List</div>
              <div className="flex justify-end items-center my-5">
                {/* <form
                  method=""
                  className="relative flex justify-end items-center"
                >
                  <input
                    type="text"
                    id="searchInput"
                    placeholder="search"
                    className="px-5 py-2 pe-10 w-64 rounded-2xl border border-gray-400 outline-main"
                  />
                  <button
                    className="absolute right-5 cursor-pointer align-middle"
                    disabled=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-search text-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </button>
                </form> */}
                <div className="flex items-center gap-4">
                  <Link
                    to={"/administrator/jobs/add-jobs"}
                    element={<AddJobs />}
                    className="border border-gray-400 px-6 py-2 rounded-2xl hover:border-green-400 cursor-pointer"
                  >
                    <TbLayoutGridAdd className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <table className="w-full text-left" id="myTable">
                <thead className="border-b">
                  <tr>
                    <th className="p-3">
                      <input
                        type="checkbox"
                        className="delete-all-checkbox"
                        name=""
                        id=""
                      />
                    </th>
                    <th className="p-3">Company Name</th>
                    <th className="p-3">Job Name</th>
                    <th className="p-3">Job Category</th>
                    <th className="p-3">Job Type</th>
                    <th className="p-3">Salary</th>
                    <th className="p-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.length > 0 ? (
                    jobs.map((item) => (
                      <tr className="border-b hover:bg-gray-50" key={item.id}>
                        <td className="p-3" data-id="<?= $user['id']; ?>">
                          <input
                            type="checkbox"
                            className="delete-checkbox"
                            name=""
                            id=""
                          />
                        </td>
                        <td className="p-3 font-medium text-gray-900 whitespace-nowrap">
                          {item.companyName}
                        </td>
                        <td className="p-3">{item.jobTitle}</td>
                        <td className="p-3">{item.jobCategory}</td>
                        <td className="p-3">{item.jobType}</td>
                        <td className="p-3">${item.salary}</td>
                        <td className="p-3 text-center">
                          <Link
                            to={`/detail-job/${item.id}`}
                            className="px-2 inline-block"
                            title="detail"
                            // element={}
                          >
                            <FiEye className="w-5 h-5 stroke-blue-600 hover:stroke-blue-700" />
                          </Link>
                          <Link
                            to={`/administrator/jobs/edit-job/${item.id}`}
                            element={<EditJobs />}
                            className="px-2 inline-block"
                          >
                            <FiEdit className="w-5 h-5 stroke-yellow-400 hover:stroke-yellow-600" />
                          </Link>
                          <button
                            type="button"
                            className="px-2 inline-block"
                            onClick={() => deleteDataJob(item.id)}
                          >
                            <HiOutlineTrash className="w-5 h-5 stroke-red-500 hover:stroke-red-700" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <></>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
