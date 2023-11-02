/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
const initialState = {
  jobs: [],
  jobById: {},
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return { ...state, jobs: action.payload };
    case "GET_JOB_BY_ID":
      // console.log(action.payload);
      return { ...state, jobById: action.payload };
    case "ADD_JOB":
      return { ...state, jobs: [...state.jobs, action.payload] };
    case "UPDATE_JOB":
      const { id, data } = action.payload;
      const updatedJobs = state.jobs.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ...data,
          };
        }
        return item;
      });
      return {
        ...state,
        jobs: updatedJobs,
      };
    case "DELETE_JOB":
      const deletedJobId = action.payload;
      const filteredJobs = state.jobs.filter(
        (item) => item.id !== deletedJobId
      );
      return {
        ...state,
        jobs: filteredJobs,
      };
    default:
      return state;
  }
};

export default jobsReducer;
