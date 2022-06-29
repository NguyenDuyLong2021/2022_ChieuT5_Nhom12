let initialState = {voucher:{}};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DISPATCH_ID_VOUCHER": {
      return {
        ...state,
        voucher: action.voucher,
      };
    }
    default:
      return state;
  }
};
export default cartReducer;
