import React from "react";
import styled from "styled-components/macro";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSortAlt2 } from "react-icons/bi";
import { Area } from "../Area";
import { ProductList } from "../BuisnessList";
import { CategoryList } from "../CategoryList";

const BodyStyle = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;

  .filter-container {
    width: 100%;
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    border-bottom: 3px solid lightgrey;
  }
  .filter {
    width: 1170px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .filter-button {
    height: 80px;
    width: 150px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 24px;
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .filter-option {
    display: none;
  }

  .content-wrapper {
    padding-top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #f6f6f6;
  }
  .wrapper {
    width: 1170px;
    display: flex;
    margin-bottom: 40px;
  }
  .side-container {
    flex: 1;
  }
  .side-container-wrpper {
    display: flex;
    margin-right: 20px;
    flex-direction: column;
    justify-content: center;
  }
  .type-buisness-container {
    font-family: "Open Sans", sans-serif;
  }
  .type-buisness-title {
    font-size: 16px;
    padding-left: 10px;
    border: 1px solid #d1d1d1;
    border-radius: 8px 8px 0px 0px;
  }
  .type-buisness-item {
    border: 1px solid #d1d1d1;
    border-radius: 0px 0px 8px 8px;
    display: flex;
    align-items: center;
    background-color: #fff;
    color: #636363;
  }
  .checkbox-option {
    padding: 8px;
    display: flex;
  }
  .checkbox-input {
    height: 18px;
    width: 18px;
    border-radius: 8px;
    overflow: visible;
  }
  .checkbox-label {
    font-size: 18px;
    padding: 0px 5px;
  }

  .category-select-container{
    margin-top: 20px;
    font-family: "Open Sans", sans-serif;
  }
  .category-select-title{
    font-size: 16px;
    padding-left: 10px;
    border: 1px solid #d1d1d1;
    border-radius: 8px 8px 0px 0px;
  }
  .area-select-container {
    margin-top: 20px;
    font-family: "Open Sans", sans-serif;
  }
  .category-select-option{
    height: 700px;
      border: 1px solid #d1d1d1;
      border-radius: 0px 0px 8px 8px;
      background-color: #fff;
      height: 700px;
      overflow: hidden;
      overflow-y: auto;
      color: #636363;
  }
  
  .area-select-title {
    font-size: 16px;
    padding-left: 10px;
    border: 1px solid #d1d1d1;
    border-radius: 8px 8px 0px 0px;
  }

  .product-container {
    flex: 3;
  }

  .product-list-page {
    width: 100%;
    padding: 20px 0px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
  }
  .product-list-page-container {
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
`;

export const Body = () => {
  return (
    <BodyStyle>
      <div className="filter-container">
        <div className="filter">
          <button className="filter-button">
            <BiSortAlt2 />
            Sort By
            <IoMdArrowDropdown />
            <ul className="filter-option">
              <li className="filter-option-item">
                <a className="filter-option-item-name" href="">
                  Relevence
                </a>
              </li>
              <li className="filter-option-item">
                <a className="filter-option-item-name" href="">
                  Popularity
                </a>
              </li>
            </ul>
          </button>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="wrapper">
          <aside className="side-container">
            <div className="side-container-wrpper">
              <div className="type-buisness-container">
                <div className="type-buisness-title">
                  <h3>Type Buisness</h3>
                </div>
                <div className="type-buisness-item">
                  <form>
                    <div className="checkbox-option">
                      <input className="checkbox-input" type="checkbox"></input>
                      <label className="checkbox-label">Individual</label>
                    </div>
                    <div className="checkbox-option">
                      <input className="checkbox-input" type="checkbox"></input>
                      <label className="checkbox-label">Shop/Office</label>
                    </div>
                  </form>
                </div>
              </div>

              <div className="category-select-container">
                <div className="category-select-title">
                  <h3>Category</h3>
                </div>
                <div className="category-select-option">
                  <CategoryList/>
                </div>
              </div>


              <div className="area-select-container">
                <div className="area-select-title">
                  <h3>Area</h3>
                </div>
                <div className="area-select-option">
                  <Area />
                </div>
              </div>
            </div>
          </aside>

          <div className="product-container">
            <ProductList />
          </div>
        </div>
      </div>

      <div className="product-list-page">
        <div className="product-list-page-container">
          <div className="product-list-page-text"></div>
          <div className="product-list-page-number"></div>
        </div>
      </div>
    </BodyStyle>
  );
};
