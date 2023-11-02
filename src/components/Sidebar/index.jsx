import { Link, useNavigate } from "react-router-dom";
import Jobs from "../../pages/Admin/Jobs/Jobs";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import logo from "../../assets/images/logo.png";
const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  const onClickLogout = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <>
      <section className="fixed md:w-[22%] xl:w-[18%] 2xl:w-[14%] h-full bg-white shadow-md sidebar">
        <div>
          <img src={logo} alt="" className="w-[50%] mx-auto py-5 mb-5" />
        </div>
        <div className="flex flex-col gap-2 px-7" id="sidebar-child">
          <Link
            to={"/administrator/jobs"}
            element={<Jobs />}
            className="flex items-center py-3 px-5 hover:rounded-md hover:bg-[#10B981] hover:text-white"
          >
            <HiOutlineViewGrid className="w-5 h-5" />
            <span className="pl-6">Jobs</span>
          </Link>
          <button
            className="flex items-center py-3 px-5 hover:rounded-md hover:bg-[#10B981] hover:text-white"
            onClick={(e) => onClickLogout(e)}
          >
            <BiLogOut className="w-5 h-5" />
            <span className="pl-6">Logout</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
