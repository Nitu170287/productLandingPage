import React from "react";
import "./style.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };
  return (
    <div className="pagination-componenet">
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="btn page-button"
        >
          &laquo; 
        </button>
      )}
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`page-button ${currentPage === page ? "active" : ""}`}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages-1 && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="page-button"
        >
           &raquo;
        </button>
      )}
    </div>
  );
};
export default Pagination;
