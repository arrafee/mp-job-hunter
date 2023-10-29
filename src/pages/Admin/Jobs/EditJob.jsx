/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Topbar from "../../../components/Topbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const EditJobs = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [dataJob, setDataJob] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/jobs/${id}`)
      .then((response) => {
        setDataJob(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const [errorMsg, setErrorMsg] = useState({
    companyName: "",
    jobTitle: "",
    jobCategory: "",
    jobType: "",
    location: "",
    salary: "",
    jobDescription: "",
  });

  const onChangeValue = (e) => {
    const { name, value } = e.target;
    setDataJob({
      ...dataJob,
      [name]: value,
    });
    validateInput(e);
  };

  const onClickHandle = (e) => {
    e.preventDefault();
    if (
      dataJob.companyName === "" ||
      dataJob.jobTitle === "" ||
      dataJob.jobCategory === "" ||
      dataJob.jobType === "" ||
      dataJob.location === "" ||
      dataJob.salary === 0 ||
      dataJob.jobDescription === ""
    ) {
      setErrorMsg({
        companyName: "Please provide a valid Company Name.",
        jobTitle: "Please provide a valid Job Name.",
        jobCategory: "Please select a valid Job Category.",
        jobType: "Please select a valid Job Type",
        location: "Please provide a valid Location.",
        salary: "Please provide a valid Salary.",
        jobDescription: "Please provide a valid Job Description.",
      });
    } else {
      axios
        .put(`http://localhost:3000/jobs/${id}`, dataJob)
        .then(() => {
          alert("Data berhasil diedit");
          navigate("/administrator/jobs");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const resetForm = (e) => {
    e.preventDefault();
    setDataJob({
      companyName: "",
      jobTitle: "",
      jobCategory: "",
      jobType: "",
      location: "",
      salary: 0,
      jobDescription: "",
    });
  };

  const validateInput = (e) => {
    const { name, value } = e.target;
    if (name === "companyName") {
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          companyName: "Please provide a valid Company Name.",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          companyName: "",
        });
      }
    }
    if (name === "jobTitle") {
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          jobTitle: "Please provide a valid Job Name.",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          jobTitle: "",
        });
      }
    }
    if (name === "location") {
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          location: "Please provide a valid Location.",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          location: "",
        });
      }
    }
    if (name === "salary") {
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          salary: "Please provide a valid Salary.",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          salary: "",
        });
      }
    }
    if (name === "jobCategory") {
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          jobCategory: "Please select a valid Job Category.",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          jobCategory: "",
        });
      }
    }
    if (name === "jobType") {
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          jobType: "Please select a valid Job Type",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          jobType: "",
        });
      }
    }
    if (name === "jobDescription") {
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          jobDescription: "Please provide a valid Job Description.",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          jobDescription: "",
        });
      }
    }
  };

  return (
    <div className="">
      <div className="flex">
        {/* LEFT SIDE */}
        {/* SIDEBAR */}
        <Sidebar />
        {/* RIGHT SIDE */}
        <div className="md:ml-[22%] xl:ml-[18%] 2xl:ml-[14%] md:w-[78%] xl:w-[82%] 2xl:w-[86%] w-full right-side">
          {/* TOPBAR */}
          <Topbar />
          {/* MAIN */}
          <section className="pt-5 pb-16 px-10">
            <div className="border-2 border-gray-200 bg-white p-7 rounded shadow-md text-sm">
              <div className="flex justify-between items-center">
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 hover:stroke-neutral-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </a>
                <div className="font-medium">
                  <a href="" className="text-main hover:text-sky-600">
                    Jobs
                  </a>
                  <span> / </span>
                  <span>Add Job</span>
                </div>
              </div>
              <form action="" method="post">
                <div className="grid grid-cols-2 gap-4 py-10">
                  <div className="mb-4">
                    <label
                      htmlFor="companyName"
                      className="block mb-2 text-sm font-medium text-form"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      className={`bg-gray-50 text-sm rounded-lg block w-full p-3.5  placeholder-gray-400 text-black border ${
                        errorMsg.companyName
                          ? " border-red-600"
                          : "border-[#CCCCCC]"
                      } focus:outline-none ${
                        errorMsg.companyName
                          ? " focus:ring-red-600 focus:border-red-600"
                          : "focus:ring-blue-500 focus:border-blue-500"
                      } `}
                      placeholder="Company Name"
                      value={dataJob.companyName}
                      onChange={(e) => onChangeValue(e)}
                    />
                    {errorMsg.companyName ? (
                      <p
                        id="filled_success_help"
                        className="mt-2 text-xs text-red-600 dark:text-red-400"
                      >
                        {errorMsg.companyName}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="jobTitle"
                      className="block mb-2 text-sm font-medium text-form"
                    >
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      id="jobTitle"
                      className={`bg-gray-50 text-sm rounded-lg block w-full p-3.5  placeholder-gray-400 text-black border ${
                        errorMsg.jobTitle
                          ? " border-red-600"
                          : "border-[#CCCCCC]"
                      } focus:outline-none ${
                        errorMsg.jobTitle
                          ? " focus:ring-red-600 focus:border-red-600"
                          : "focus:ring-blue-500 focus:border-blue-500"
                      }`}
                      placeholder="Job Title"
                      value={dataJob.jobTitle}
                      onChange={(e) => onChangeValue(e)}
                    />
                    {errorMsg.jobTitle ? (
                      <p
                        id="filled_success_help"
                        className="mt-2 text-xs text-red-600 dark:text-red-400"
                      >
                        {errorMsg.jobTitle}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="location"
                      className="block mb-2 text-sm font-medium text-form"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      className={`bg-gray-50 text-sm rounded-lg block w-full p-3.5  placeholder-gray-400 text-black border ${
                        errorMsg.location
                          ? " border-red-600"
                          : "border-[#CCCCCC]"
                      } focus:outline-none ${
                        errorMsg.location
                          ? " focus:ring-red-600 focus:border-red-600"
                          : "focus:ring-blue-500 focus:border-blue-500"
                      }`}
                      placeholder="Location"
                      value={dataJob.location}
                      onChange={(e) => onChangeValue(e)}
                    />
                    {errorMsg.location ? (
                      <p
                        id="filled_success_help"
                        className="mt-2 text-xs text-red-600 dark:text-red-400"
                      >
                        {errorMsg.location}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="salary"
                      className="block mb-2 text-sm font-medium text-form"
                    >
                      Salary
                    </label>
                    <input
                      type="number"
                      name="salary"
                      id="salary"
                      className={`bg-gray-50 text-sm rounded-lg block w-full p-3.5  placeholder-gray-400 text-black border ${
                        errorMsg.salary ? " border-red-600" : "border-[#CCCCCC]"
                      } focus:outline-none ${
                        errorMsg.salary
                          ? " focus:ring-red-600 focus:border-red-600"
                          : "focus:ring-blue-500 focus:border-blue-500"
                      }`}
                      placeholder="Salary"
                      value={dataJob.salary}
                      onChange={(e) => onChangeValue(e)}
                    />
                    {errorMsg.salary ? (
                      <p
                        id="filled_success_help"
                        className="mt-2 text-xs text-red-600 dark:text-red-400"
                      >
                        {errorMsg.salary}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="jobCategory"
                      className="block mb-2 text-sm font-medium text-form"
                    >
                      Job Category
                    </label>
                    <select
                      id="jobCategory"
                      name="jobCategory"
                      className={`cursor-pointer bg-gray-50 border appearance-none ${
                        errorMsg.jobCategory
                          ? " border-red-600"
                          : "border-[#CCCCCC]"
                      } text-sm rounded-lg block w-full p-3.5 placeholder-gray-400 text-form focus:outline-none ${
                        errorMsg.jobCategory
                          ? " focus:ring-red-600 focus:border-red-600"
                          : "focus:ring-blue-500 focus:border-blue-500"
                      }`}
                      value={dataJob.jobCategory}
                      onChange={(e) => onChangeValue(e)}
                    >
                      <option value="">Choose job category</option>
                      <option value="design">Design</option>
                      <option value="technology">Technology</option>
                      <option value="marketing">Marketing</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 top-7 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    {errorMsg.jobCategory ? (
                      <p
                        id="filled_success_help"
                        className="mt-2 text-xs text-red-600 dark:text-red-400"
                      >
                        {errorMsg.jobCategory}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="jobType"
                      className="block mb-2 text-sm font-medium text-form"
                    >
                      Job Type
                    </label>
                    <select
                      id="jobType"
                      name="jobType"
                      className={`cursor-pointer bg-gray-50 border appearance-none ${
                        errorMsg.jobType
                          ? " border-red-600"
                          : "border-[#CCCCCC]"
                      } text-sm rounded-lg block w-full p-3.5 placeholder-gray-400 text-form focus:outline-none ${
                        errorMsg.jobType
                          ? " focus:ring-red-600 focus:border-red-600"
                          : "focus:ring-blue-500 focus:border-blue-500"
                      }`}
                      value={dataJob.jobType}
                      onChange={(e) => onChangeValue(e)}
                    >
                      <option value="">Choose job type</option>
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                      <option value="Contract">Contract</option>
                      <option value="Remote">Remote</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 top-7 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    {errorMsg.jobType ? (
                      <p
                        id="filled_success_help"
                        className="mt-2 text-xs text-red-600 dark:text-red-400"
                      >
                        {errorMsg.jobType}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="mb-4 col-span-2">
                    <label
                      htmlFor="jobDescription"
                      className="block mb-2 text-sm font-medium text-form"
                    >
                      Job Description
                    </label>
                    <textarea
                      name="jobDescription"
                      id=""
                      cols="30"
                      rows="10"
                      className={`bg-gray-50 text-sm rounded-lg block w-full p-3.5  placeholder-gray-400 text-black border ${
                        errorMsg.jobDescription
                          ? " border-red-600"
                          : "border-[#CCCCCC]"
                      } focus:outline-none ${
                        errorMsg.jobDescription
                          ? " focus:ring-red-600 focus:border-red-600"
                          : "focus:ring-blue-500 focus:border-blue-500"
                      }`}
                      value={dataJob.jobDescription}
                      onChange={(e) => onChangeValue(e)}
                    />
                    {/* <input
                      type="number"
                      name="salary"
                      id="salary"
                      
                      placeholder="Salary"
                    /> */}
                    {errorMsg.jobDescription ? (
                      <p
                        id="filled_success_help"
                        className="mt-2 text-xs text-red-600 dark:text-red-400"
                      >
                        {errorMsg.jobDescription}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="flex justify-end grid-cols-2 gap-8 pt-12">
                  <button
                    type="button"
                    className="text-main font  -normal rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center border border-main hover:bg-slate-100"
                    onClick={(e) => resetForm(e)}
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    className="text-white bg-[#10B981] font-normal rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center"
                    onClick={(e) => onClickHandle(e)}
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EditJobs;
