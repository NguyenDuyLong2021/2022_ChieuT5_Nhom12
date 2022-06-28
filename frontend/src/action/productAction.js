import productsAPI from "../api/productsAPI";
//action to load data detail product
export const loadProductDetail = (idProduct) => {
  return (dispatch) => {
    const fetchProduct = async () => {
      try {
        productsAPI.getDetailProduct(idProduct).then(result=>dispatch(dispatchProduct(result.data)));
      } catch (error) {
        console.log("Can not load...!", error);
      }
    };
    fetchProduct()
  };

}; 
//action to load data detail product
export const addProduct = (idProduct) => {
  return (dispatch) => {
    const fetchProduct = async () => {
      try {
        productsAPI.addToCart(idProduct).then(result=>dispatch(dispatchProduct(result.data)));
      } catch (error) {
        console.log("Can not load...!", error);
      }
    };
    fetchProduct()
  };

}; 
//action để dispatch data vào store redux
export const dispatchProduct = (product) => {
  return { type: "DISPATCH_PRODUCT", product };
};
