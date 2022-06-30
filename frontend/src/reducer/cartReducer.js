let initialState = {voucher:{}, totalPrice:0, listCartItem:[]};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DISPATCH_ID_VOUCHER": {
      return {
        ...state,
        voucher: action.voucher,
      };
    }
    case "DISPATCH_TOTAL_PRICE": {
      return {
        ...state,
        totalPrice: action.totalPrice,
      };
    }
    case "DISPATCH_LIST_CART_ITEM": {
      return {
        ...state,
        listCartItem: action.listCartItem,
      };
    }
    default:
      return state;
  }
};
export default cartReducer;
