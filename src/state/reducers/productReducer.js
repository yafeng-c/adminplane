const initState = {
  products: [],
  err: null,
  product2edit: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      state = {
        ...state,
        products: action.payload,
      };
      break;
    case "GET_PRODUCTS_FAIL":
      state = {
        ...state,
        err: action.payload,
      };
      break;
    case "ADD_PRODUCT":
      state = {
        ...state,
        products: action.payload,
      };
      break;
    case "DELETE_PRODUCT":
      state = {
        ...state,
        products: action.payload,
      };
      break;
    case "GET_PRODUCT":
      state = {
        ...state,
        product2edit: action.payload,
      };
      break;
    case "CANCEL_PRODUCT":
      state = {
        ...state,
        product2edit: null,
      };
      break;
    default:
      break;
  }
  return state;
};
