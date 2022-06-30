//dispatch tasks to todolist reducer
export const dispatchIdVoucher = (voucher) => {
  return { type: "DISPATCH_ID_VOUCHER",voucher };
};
export const dispatchTotalPrice = (totalPrice) => {
  return { type: "DISPATCH_TOTAL_PRICE",totalPrice };
};
export const dispatchListCartItem = (listCartItem) => {
  return { type: "DISPATCH_LIST_CART_ITEM",listCartItem };
};