import { Link } from "react-router-dom";
import { CardCategories } from "../../components/Card";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJobs } from "../../redux/actions/jobs";
import design from "../../assets/images/design.png";
import sales from "../../assets/images/sales.png";
import marketing from "../../assets/images/marketing.png";
import finance from "../../assets/images/finance.png";
import technology from "../../assets/images/technology.png";
import engineering from "../../assets/images/engineering.png";
import business from "../../assets/images/business.png";
import humanResource from "../../assets/images/humanResource.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Categories = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const [categories, setCategories] = useState([]);

  // console.log(jobs.filter((item) => item.jobCategory === "Technology").length);
  useEffect(() => {
    AOS.init();
  });
  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  useEffect(() => {
    const categoriesData = [
      {
        name: "Design",
        icon: design,
        jobsCount: jobs.filter((item) => item.jobCategory === "Design").length,
      },
      {
        name: "Sales",
        icon: sales,
        jobsCount: jobs.filter((item) => item.jobCategory === "Sales").length,
      },
      {
        name: "Marketing",
        icon: marketing,
        jobsCount: jobs.filter((item) => item.jobCategory === "Marketing")
          .length,
      },
      {
        name: "Finance",
        icon: finance,
        jobsCount: jobs.filter((item) => item.jobCategory === "Finance").length,
      },
      {
        name: "Technology",
        icon: technology,
        jobsCount: jobs.filter((item) => item.jobCategory === "Technology")
          .length,
      },
      {
        name: "Engineering",
        icon: engineering,
        jobsCount: jobs.filter((item) => item.jobCategory === "Engineering")
          .length,
      },
      {
        name: "Business",
        icon: business,
        jobsCount: jobs.filter((item) => item.jobCategory === "Business")
          .length,
      },
      {
        name: "Human Resource",
        icon: humanResource,
        jobsCount: jobs.filter((item) => item.jobCategory === "Human Resource")
          .length,
      },
    ];
    setCategories(categoriesData);
  }, [jobs]);
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
            {categories.map((item, index) => (
              <div
                key={index}
                data-aos={index % 2 == 0 ? "fade-up" : "fade-down"}
                data-aos-duration="500"
                data-aos-once="true"
                data-aos-delay={index * 250}
              >
                <CardCategories
                  name={item.name}
                  icon={item.icon}
                  jobsCount={item.jobsCount}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
