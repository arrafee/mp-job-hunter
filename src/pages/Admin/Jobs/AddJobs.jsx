import { Link } from "react-router-dom";
import Jobs from "./Jobs";

const AddJobs = () => {
  return (
    <div className="">
      <div className="flex">
        {/* LEFT SIDE */}
        {/* SIDEBAR */}
        <section className="fixed md:w-[22%] xl:w-[18%] 2xl:w-[14%] h-full bg-white shadow-md sidebar">
          <div>
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt=""
              className="w-[20%] mx-auto py-5 mb-5"
            />
          </div>
          <div className="flex flex-col gap-2 px-7" id="sidebar-child">
            <a
              href=""
              className="flex items-center py-3 px-5 hover:rounded-md hover:bg-[#10B981] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span className="pl-6">Dashboard</span>
            </a>
            <Link
              to={"/jobs"}
              element={<Jobs />}
              className="flex items-center py-3 px-5 hover:rounded-md hover:bg-[#10B981] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>
              <span className="pl-6">Jobs</span>
            </Link>
            {/* <a
              href=""
              className="flex items-center py-3 px-5 hover:rounded-md hover:bg-[#10B981] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>
              <span className="pl-6">Categories</span>
            </a> */}
          </div>
        </section>
        {/* RIGHT SIDE */}
        <div className="md:ml-[22%] xl:ml-[18%] 2xl:ml-[14%] md:w-[78%] xl:w-[82%] 2xl:w-[86%] w-full right-side">
          {/* NAVBAR */}
          <section className="flex justify-between items-center h-16">
            <div className="ml-4 burger cursor-pointer" id="burger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 burger-icon"
                id="burger-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <div className="flex mr-10">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <span className="pl-2">Admin</span>
              </div>
            </div>
          </section>
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
                      className="bg-gray-50 text-sm rounded-lg block w-full p-3.5  placeholder-gray-400 text-black border border-[#CCCCCC] focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Company Name"
                    />
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
                      className="bg-gray-50 text-sm rounded-lg block w-full p-3.5  placeholder-gray-400 text-black border border-[#CCCCCC] focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Job Title"
                    />
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
                      className="bg-gray-50 text-sm rounded-lg block w-full p-3.5  placeholder-gray-400 text-black border border-[#CCCCCC] focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Location"
                    />
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
                      className="bg-gray-50 text-sm rounded-lg block w-full p-3.5  placeholder-gray-400 text-black border border-[#CCCCCC] focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Salary"
                    />
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
                      className="cursor-pointer bg-gray-50 border appearance-none border-gray-300 text-sm rounded-lg block w-full p-3.5 placeholder-gray-400 text-form focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
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
                      className="cursor-pointer bg-gray-50 border appearance-none border-gray-300 text-sm rounded-lg block w-full p-3.5 placeholder-gray-400 text-form focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
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
                      className="bg-gray-50 text-sm rounded-lg block w-full p-3.5  placeholder-gray-400 text-black border border-[#CCCCCC] focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                    {/* <input
                      type="number"
                      name="salary"
                      id="salary"
                      
                      placeholder="Salary"
                    /> */}
                  </div>
                </div>
                <div className="flex justify-end grid-cols-2 gap-8 pt-12">
                  <button
                    type="reset"
                    className="text-main font  -normal rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center border border-main hover:bg-slate-100"
                  >
                    Clear
                  </button>
                  <button
                    type="submit"
                    className="text-white bg-[#10B981] font-normal rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center"
                  >
                    Add
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

export default AddJobs;
