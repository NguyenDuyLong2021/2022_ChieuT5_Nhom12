import axiosClient from "./axiosClient";
//bước 1:tạo api function để load dữ liệu, để biết về thông tin về mô tả các api mn có theo link này 
const productsAPI = {
  getProducts: () => {
    return axiosClient.get("/products");
  },
};
export default productsAPI;
