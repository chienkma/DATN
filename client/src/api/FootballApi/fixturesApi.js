import axiosFootballApi from "./axiosFootballApi";

const fixturesApi = {
  get(params) {
    const url = "/fixtures";
    return axiosFootballApi.get(url, { params });
  },
};

export default fixturesApi;
