import userAPIs from "../api/userAPI";
//get request tasks
export const loadUser = (id_user) => {
  return (dispatch) => {
    const fetchUser = () => {
      try {
        userAPIs.getUser(id_user).then((q) => {
          dispatch(dispatchUser(q.data.model));
        });
      } catch (error) {
        console.log("Can not load...!", error);
      }
    };
    fetchUser();
  };
};
//dispatch tasks to todolist reducer
export const dispatchUser = (user) => {
  return { type: "DISPATCH_USER", user };
};
