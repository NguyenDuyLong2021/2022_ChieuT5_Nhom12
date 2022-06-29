let initialState = {user:{}};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DISPATCH_USER": {
      return {
        ...state,
        user: action.user,
      };
    }
    default:
      return state;
  }
};
export default userReducer;
