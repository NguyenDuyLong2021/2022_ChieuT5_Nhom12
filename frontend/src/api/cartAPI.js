import axiosClient from "./axiosClient";
const cartAPIs = {
  getCartDetail: (id_cart) => {
    return axiosClient.get(`/cart?id_cart=${id_cart}`);
  },
  checkVoucher: (data) => {
    return axiosClient.get(
      `/checkVoucher?id_user=${data.id_user}&codeVoucher=${data.codeVoucher}`
    );
  },
  deleteCartItem: (id_cart_item) => {
    return axiosClient.delete(
      `/updateCart/remove?id_cart_item=${id_cart_item}`
    );
  },
  updateQuatityCartItem: (data) => {
    return axiosClient.put("/updateCart/edit", data);
  },
};
export default cartAPIs;
