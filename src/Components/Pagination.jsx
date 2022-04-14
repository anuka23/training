import React from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { useStoreState } from "easy-peasy";
import { useState, useEffect } from "react";

const PaginationStyle = styled.div`
  width: 100%;
  padding: 30px 0px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;

  .page-container {
    width: 1170px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .product-list-page-text {
    font-family: "Open Sans", sans-serif;
    color: #686868;
    font-size: 14px;
  }

  .pagination > li {
    display: inline-block;
    padding: 2px 10px;
    list-style: none;
    border: 0.9px solid #ddd;
    border-radius: 5px;
    margin: 0px 7px;
    background-color: #f5f5f5;
    cursor: pointer;
    color: #556270;
  }
  .pagination .break-me {
    border: none;
    background-color: #fff;
  }
  .pagination > li.active {
    background-color: #fff;
  }
`;

export const Pagination = ({ searchUpdatedPage }) => {
  const listLength = useStoreState((state) => state.listLength);
  const [pageCount, setPageCount] = useState(0);

  const handlePageClick = (data) => {
    let currentPage = data.selected + 1;
    searchUpdatedPage(currentPage);
  };

  console.log("page count", pageCount);

  console.log("list length", listLength);

  useEffect(() => setPageCount(Math.ceil(listLength / 10)));
  return (
    <PaginationStyle>
      <div className="page-container">
        <div className="product-list-page-container">
          <div className="product-list-page-text">Showing page 1 of 1</div>
        </div>
        <div>
          <ReactPaginate
            previousLabel={"<< Prev"}
            nextLabel={"next >>"}
            breakLable={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </PaginationStyle>
  );
};
