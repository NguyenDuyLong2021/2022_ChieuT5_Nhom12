import axiosClient from "./axiosClient";
//bước 1:tạo api function để load dữ liệu, để biết về thông tin về mô tả các api mn có theo link này 
const cartApi = { 
  //bước 1
  booleanProduct:(idProduct)=>{
    // http://localhost:8080/foodfresh/booleanProduct?id_product=5
    return axiosClient.get(`/booleanProduct?id_product=${idProduct}`)  
  },
  //bước 1
  addToCart:(id,data)=>{
    // http://localhost:8080/foodfresh/updateCart/addToCart??id_product=1
    return axiosClient.post(`/updateCart/addToCart?id_cart=${id}`,data)  
  },
  //bước 1
  updateCart:(data)=>{
  // http://localhost:8080/foodfresh/updateCart/edit
  return axiosClient.put(`/updateCart/edit`,data)  
 },
}; 
export default cartApi;
