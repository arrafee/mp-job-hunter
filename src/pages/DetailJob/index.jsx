import JobInformation from "./JobInformation";
import { CardJobs } from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJobs } from "../../redux/actions/jobs";
import { useParams } from "react-router-dom";
const DetailJob = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const { id } = useParams();
  const idJob = parseInt(id);
  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);
  return (
    <div className="flex md:flex-row flex-col gap-5 px-20 my-10">
      <div className="flex flex-col gap-5 w-8/12 ">
        <JobInformation />
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-[1.5rem] font-semibold">Other Jobs</div>
        {jobs.length > 0 ? (
          jobs
            .filter((item) => item.id !== idJob)
            .map((item) => <CardJobs key={item.id} job={item} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default DetailJob;
