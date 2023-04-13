import axiosTransferMarket from "./axiosTransferMarket";

const newApi = {
  getAll() {
    const url = "/news/list-latest";
    return axiosTransferMarket.get(url);
  },
};
export default newApi;
