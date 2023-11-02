import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./style.css";

const SearchBar = ({ filterProducts }) => {
  return (
    <div className="search-box search-box-light">
      <SearchRoundedIcon className="search-icon" />
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          filterProducts(e.target.value);
        }}
      />
    </div>
  );
};
export default SearchBar;
