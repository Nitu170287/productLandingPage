import "../../src/index.css";
import Cards from "../components/common/cards";
import { useEffect } from "react";
import {
  getProducts,
  filter,
  setCurrentPage,
} from "../store/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/common/SearchBar";
import Pagination from "../components/common/Pagination";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {
  const productState = useSelector((state) => state.product); //to read the store data
  const dispatch = useDispatch(); // to update the store data by calling reducer's function

  const filterProducts = (value) => {
    dispatch(filter(value));
  };

  //pagination

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
    // Add your logic here to fetch data for the new page
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="home">
      <Header />
      {productState.loading ? (
        <div className="loading">
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <>
          <SearchBar filterProducts={filterProducts} />

          {/* <!-- buttons --using bootstrap--> */}
          <div className="buttons mb-5 pt-4 ">
            <button
              id="btn-all"
              className="btn btn-filter  p-2"
              style={{
                width: "15%",
                height: "5vh",
                marginRight: "10px",
                borderRadius: "0.5rem",
              }}
              onClick={() => {
                filterProducts();
              }}
            >
              All
            </button>
            <button
              id="btn-men"
              className="btn btn-filter p-2"
              style={{
                width: "15%",
                height: "5vh",
                marginRight: "10px",
                borderRadius: "0.5rem",
              }}
              onClick={() => {
                filterProducts("men's clothing");
              }}
            >
              Mens
            </button>
            <button
              id="btn-women"
              className="btn btn-filter p-2"
              style={{
                width: "15%",
                height: "5vh",
                marginRight: "10px",
                borderRadius: "0.5rem",
              }}
              onClick={() => {
                filterProducts("women's clothing");
              }}
            >
              Womens
            </button>
            <button
              id="btn-jewellery"
              className="btn btn-filter  p-2"
              style={{
                width: "15%",
                height: "5vh",
                marginRight: "10px",
                borderRadius: "0.5rem",
              }}
              onClick={() => {
                filterProducts("jewelery");
              }}
            >
              Jewllery
            </button>
            <button
              id="btn-electronics"
              className="btn  btn-filter p-2"
              style={{ width: "15%", height: "5vh", borderRadius: "0.5rem" }}
              onClick={() => {
                filterProducts("electronics");
              }}
            >
              Electronics
            </button>
          </div>

          {productState.products.length > 0 ? (
            <Cards state={productState} />
          ) : (
            <div className="noProducts">No products matching the filter</div>
          )}

          {productState.products.length > 0 ? (
            <Pagination
              currentPage={productState.currentPage}
              totalPages={productState.totalPages}
              onPageChange={handlePageChange}
            />
          ) : null}
        </>
      )}

      <Footer />
    </div>
  );
};
export default Home;
