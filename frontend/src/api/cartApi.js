import axiosClient from "./axiosClient";
const cartApi = {
  //bước 1
  addToCart: (id, data) => {
    return axiosClient.post(`/updateCart/addToCart?id_cart=${id}`, data);
  },
  getCartDetail: (id_cart) => {
    return axiosClient.get(`/cart?id_cart=${id_cart}`);
  },
  updateQuatityCartItem: (data) => {
    return axiosClient.put(`/updateCart/edit`, data);
  },
  deleteCartItem: (id_cart_item) => {
    return axiosClient.delete(
      `/updateCart/remove?id_cart_item=${id_cart_item}`
    );
  },
  checkVoucher: (params) => {
    return axiosClient.get(
      `/checkVoucher?id_user=${params.id_user}&codeVoucher=${params.codeVoucher}`
    );
  },
  order:(id_user,data)=>{
    console.log("đây",data)
    return axiosClient.post(`order?id_user=${id_user}`, data)
  }
};
export default cartApi;
