import { useDispatch, useSelector } from "react-redux";
import jobImage from "../../assets/images/job-image.png";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getJobById } from "../../redux/actions/jobs";
const JobInformation = () => {
  const dispatch = useDispatch();
  const job = useSelector((state) => state.jobs.jobById);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getJobById(id));
  }, [dispatch, id]);
  return (
    <>
      <div className="bg-[#F7F7F7] rounded-[15px] p-5 border border-[#10B981]">
        <p className="text-2xl font-semibold">{job.companyName}</p>
        <p className="text-xl font-semibold mt-2">{job.jobTitle}</p>
        <small className="italic">Basic Job Information</small>
        <table className="text-[#333333]">
          <tr>
            <td className="font-medium">Job Category</td>
            <td>: {job.jobCategory}</td>
          </tr>
          <tr>
            <td className="font-medium">Job Type</td>
            <td>: {job.jobType}</td>
          </tr>
          <tr>
            <td className="font-medium">Location</td>
            <td>: {job.location}</td>
          </tr>
          <tr>
            <td className="font-medium">Salary</td>
            <td>: ${job.salary}</td>
          </tr>
        </table>
      </div>
      <div className="bg-[#F7F7F7] rounded-[15px] p-5 border border-[#10B981]">
        <p className="text-2xl font-semibold">Job Description</p>
        <div>
          <div dangerouslySetInnerHTML={{ __html: job.jobDescription }} />
        </div>
      </div>
    </>
  );
};

export default JobInformation;
