import { CardJobs } from "../../components/Card";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJobs } from "../../redux/actions/jobs";
import AOS from "aos";
import "aos/dist/aos.css";

const LatestJobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const [latestJobs, setLatestJobs] = useState([]);

  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  useEffect(() => {
    setLatestJobs(jobs.reverse());
  }, [jobs]);

  return (
    <>
      <div>
        <div className="px-20 py-8">
          <div className="flex justify-between items-center">
            <div className="font-semibold text-[2rem] text-[#333333]">
              Latest <span className="text-[#10B981]">jobs open</span>
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
            <div className="grid lg:grid-cols-2 grid-cols-1 w-11/12 gap-y-12 gap-x-48">
              {latestJobs.length > 0 ? (
                latestJobs.slice(0, 4).map((item, index) => (
                  <div
                    key={item.id}
                    data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
                    data-aos-duration="500"
                    data-aos-once="true"
                    data-aos-delay={index * 250}
                  >
                    <CardJobs job={item} />
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestJobs;
