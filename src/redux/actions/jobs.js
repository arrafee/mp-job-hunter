/* eslint-disable no-unused-vars */
import axios from "axios";

const getJobs = () => (dispatch) => {
  axios
    .get("http://localhost:3000/jobs")
    .then((response) => {
      dispatch({ type: "GET_JOBS", payload: response.data });
    })
    .catch((error) => {
      console.log("Error :", error);
    });
};

const getJobById = (id) => (dispatch) => {
  axios
    .get(`http://localhost:3000/jobs/${id}`)
    .then((response) => {
      dispatch({ type: "GET_JOB_BY_ID", payload: response.data });
    })
    .catch((error) => {
      console.log("Error :", error);
    });
};

const addJob = (dataJob) => (dispatch) => {
  return axios
    .post("http://localhost:3000/jobs", dataJob)
    .then((response) => {
      dispatch({ type: "ADD_JOB", payload: response.data });
      return response.data;
    })
    .catch((error) => {
      console.log("Error :", error);
      throw error;
    });
};

const updateJob = (id, dataUpdateJob) => (dispatch) => {
  return axios
    .put(`http://localhost:3000/jobs/${id}`, dataUpdateJob)
    .then((response) => {
      const data = response.data;
      dispatch({ type: "UPDATE_JOB", payload: { id: id, data: data } });
      return response.data;
    })
    .catch((error) => {
      console.log("Error :", error);
      throw error;
    });
};

const deleteJob = (id) => (dispatch) => {
  return axios
    .delete(`http://localhost:3000/jobs/${id}`)
    .then((response) => {
      dispatch({ type: "DELETE_JOB", payload: id });
      return response.data;
    })
    .catch((error) => {
      console.log("Error :", error);
      throw error;
    });
};

export { getJobs, getJobById, addJob, updateJob, deleteJob };
