import * as actionTypes from "./ActionTypes";

/* Action Types */
const {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_CAT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_AMOUNT,
  CLEAR_CART,
  CHECKING_OUT,
  FILTER__PRODUCTS,
} = actionTypes;

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      action.payload.forEach((p) => {
        const num = p.rating;

        const h =
          num - Math.floor(num) > 0.5
            ? 1
            : num - Math.floor(num) > 0.3
            ? 0.5
            : 0;
        p.rating = Math.floor(num) + h;
      });
      return {
        ...state,
        loading: false,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        products: [],
        categories: [],
        loading: false,
        error: "Error, Try Again.",
      };
    case FETCH_CAT:
      return { ...state, categories: action.payload };
    case ADD_TO_CART: {
      const newCartPro = [...state.cartProducts, action.payload];
      return { ...state, cartProducts: newCartPro };
    }
    case REMOVE_FROM_CART: {
      state.cartProducts.forEach((p) => {
        if (p.id == action.payload) {
          p.count = 0;
          p.inCart = false;
          p.total = 0;
        }
      });
      const newCartPro = state.cartProducts.filter(
        (i) => i.id != action.payload
      );
      return { ...state, cartProducts: newCartPro };
    }
    case CHANGE_AMOUNT: {
      const newCartPro = state.cartProducts.map((pro) => {
        if (pro.id == action.payload.id) {
          pro.count = action.payload.q;
          pro.total = pro.count * pro.price;
        }
        return pro;
      });

      return { ...state, cartProducts: newCartPro };
    }
    case CHECKING_OUT: {
      let check = false,
        total = 0;
      state.cartProducts.forEach((p) => {
        total += p.total;
      });
      if (action.payload.checking) check = true;
      else check = false;
      return { ...state, total, checkingOut: check };
    }
    case CLEAR_CART: {
      state.cartProducts.forEach((p) => {
        p.count = 0;
        p.total = 0;
      });
      return { ...state, cartProducts: [] };
    }
    case FILTER__PRODUCTS: {
      const initalFilterObj = { priceRanges: [50, 9000], category: "all" };
      const filterObj = action.payload;

      let filtered = state.filteredProducts;

      switch (filterObj.type) {
        case "NAME":
          {
            if (filterObj.name) {
              filtered = filtered.filter((p) =>
                p.title.toLowerCase().startsWith(filterObj.name.toLowerCase())
              );
            } else filtered = state.products;
          }
          break;
        case "CATEGORY":
          {
            filtered = filtered.filter(
              (p) => p.category.toLowerCase() == filterObj.category
            );
            if (filterObj.category == initalFilterObj.category)
              filtered = state.products;
          }
          break;
        case "RATE":
          {
            filtered = filtered.filter((p) => p.rating == filterObj.rate);
          }
          break;
        case "DISCOUNT":
          {
            const { discount } = action.payload;
            filtered = filtered.filter(
              (p) => p.discountPercentage > Number(discount)
            );
          }
          break;
        case "PRICE":
          {
            filtered = filtered.filter(
              (p) =>
                p.price - (p.discountPercentage * p.price) / 100 >
                  filterObj.priceRanges[0] &&
                p.price - (p.discountPercentage * p.price) / 100 <
                  filterObj.priceRanges[1]
            );
            if (
              filterObj.priceRanges[0] == initalFilterObj.priceRanges[0] &&
              filterObj.priceRanges[1] == initalFilterObj.priceRanges[1]
            )
              filtered = state.products;
          }
          break;
        default: {
          filtered = state.products;
        }
      }

      return { ...state, filteredProducts: filtered };
    }
  }
};

export default reducer;
