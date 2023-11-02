import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    products: [],
    originalProduct: [],
    totalPages: 0,
    currentPage: 1,
    paginatedProducts: [],
    error: null,
  },
  reducers: {
    fetchProducts: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
        products: [],
        originalProduct: [],
        totalPages: 1,
        currentPage: 1,
        paginatedProducts: [],
      };
    },
    productsFetched: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        error: null,
        products: payload.slice(0, 9),
        originalProduct: payload,
        totalPages: payload.length / 9 + (payload.length % 9 > 0 ? 1 : 0),
      };
    },
    productsError: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        error: payload,
        products: [],
        originalProduct: [],
      };
    },
    filterProducts: (state, { payload }) => {
      console.log("payload", payload);
      return {
        ...state,
        products: payload
          ? state.originalProduct.filter(
              (p) =>
                p.category === payload ||
                p.title.toUpperCase().indexOf(payload.toUpperCase()) >= 0 ||
                p.description.toUpperCase().indexOf(payload.toUpperCase()) >= 0
            )
          : state.originalProduct.slice(0, 10),
      };
    },
    setPage: (state, { payload }) => {
      //console.log("payload", payload);
      let prevIndex = payload - 1;
      console.log(
        "pageNumber",
        payload
      );
      return {
        ...state,
        currentPage: payload,
        products: state.originalProduct.slice(prevIndex*9, prevIndex*9 + 9),
      };
    },
  },
});

export const {
  fetchProducts,
  productsFetched,
  productsError,
  filterProducts,
  setPage,
} = ProductSlice.actions;
export default ProductSlice.reducer;
