import axiosClient from "./axiosClient";
const userAPIs = {
  getUser: (id_user) => {
    return axiosClient.get(`/user?id_user=${id_user}`);
  }
};
export default userAPIs;
