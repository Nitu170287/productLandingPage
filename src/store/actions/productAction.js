import axios from "axios";
import {
  fetchProducts,
  productsError,
  productsFetched,
  filterProducts,
  setPage
} from "../slices/productSlice.js";

export const getProducts = () => async (dispatch) => {
  dispatch(fetchProducts());
  const url = "https://fakestoreapi.com/products";
  try {
    const response = await axios.get(url);
    const data = response.data;
    dispatch(productsFetched(data));
  } catch (e) {
    dispatch(productsError(e.message));
  }
};

export const filter = (value) => async (dispatch) => {
  console.log("value", value);
  dispatch(filterProducts(value));
};

export const setCurrentPage = (value) => async (dispatch) => {
    dispatch(setPage(value));
  };