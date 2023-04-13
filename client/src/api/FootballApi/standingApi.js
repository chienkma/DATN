import axiosFootballApi from "./axiosFootballApi";

const standingApi = {
  getAll(params) {
    const url = "/standings";
    return axiosFootballApi.get(url, { params });
  },
};

export default standingApi;
