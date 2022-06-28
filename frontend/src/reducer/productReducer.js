let initialState = {
   product:{}
}




const productReducer = (state = initialState, action) => {
    switch (action.type) {
        // dispatch task to store reducer when get list task
        case "DISPATCH_PRODUCT": {
            return {
                ...state, product: action.product.model,
            };
        }

        default:
            return state;
    }
}
export default productReducer;