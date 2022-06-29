import axiosClient from "./axiosClient";
//bước 1:tạo api function để load dữ liệu, để biết về thông tin về mô tả các api mn có theo link này 
const productsAPI = {
  getProducts: () => {
    return axiosClient.get("/products");
  },
  //bước 1
  getDetailProduct:(id)=>{
    // http://localhost:8080/foodfresh/product?id_product=1
    return axiosClient.get(`/product?id_product=${id}`)
  }, 
}; 
export default productsAPI;
