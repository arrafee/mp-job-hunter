import jobImage from "../../assets/images/job-image.png";
const JobInformation = () => {
  return (
    <>
      <div className="bg-[#F7F7F7] rounded-[15px] p-5 border border-[#10B981]">
        <img src={jobImage} alt="" />
        <p className="text-2xl font-semibold mt-2">Fresher UI/UX Designer</p>
        <small className="italic">Basic Job Information</small>
        <table className="text-[#333333]">
          <tr>
            <td className="font-medium">Job Category</td>
            <td>: Technology</td>
          </tr>
          <tr>
            <td className="font-medium">Job Type</td>
            <td>: Full Time</td>
          </tr>
          <tr>
            <td className="font-medium">Location</td>
            <td>: New York, United State</td>
          </tr>
          <tr>
            <td className="font-medium">Salary</td>
            <td>: $2000</td>
          </tr>
        </table>
      </div>
      <div className="bg-[#F7F7F7] rounded-[15px] p-5 border border-[#10B981]">
        <p className="text-2xl font-semibold">Job Description</p>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            minus, provident excepturi praesentium laborum expedita eaque nulla
            est adipisci possimus ut voluptatibus architecto consequuntur
            asperiores facere incidunt officiis aliquam nostrum nobis. Nam
            maxime aliquid consequuntur voluptates tempora fuga molestiae eos
            suscipit ex ipsum exercitationem eligendi ab modi ratione aliquam
            minus ullam voluptate repudiandae itaque, fugiat saepe quidem
            obcaecati tenetur voluptas.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab
            laboriosam doloribus tempora nesciunt non, inventore, voluptatem
            numquam pariatur quaerat quia, animi ducimus! Iste cum aspernatur
            corrupti debitis! Aperiam odit at suscipit maxime totam ex culpa
            error doloremque enim neque?
          </p>
        </div>
      </div>
    </>
  );
};

export default JobInformation;
