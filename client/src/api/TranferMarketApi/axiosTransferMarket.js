import axios from "axios";
const axiosTransferMarket = axios.create({
  baseURL: "https://transfermarket.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "023dd78b62msh8af8ac27cad9a22p1fa4e6jsne3cc4ab352a9",
    "X-RapidAPI-Host": "transfermarket.p.rapidapi.com",
  },
});
axiosTransferMarket.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
axiosTransferMarket.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosTransferMarket;
