import React from "react";
import styled from "styled-components/macro";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSortAlt2 } from "react-icons/bi";
import { Area } from "../Area";
import { BuisnessList } from "../BuisnessList";
import { CategoryList } from "../CategoryList";
import { mobile } from "../../responsive";
import { tab } from "../../responsive";

const BodyStyle = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;

  .filter-container-wrapper {
    width: 100%;
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    border-bottom: 3px solid lightgrey;
  }
  .filter-wrapper {
    width: 1170px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Open Sans", sans-serif;
  }
  .filter-button {
    font-size: 24px;
    font-weight: 500;
    margin-left: 20px;
    color: #000;
    cursor: pointer;
    display: none;
  }
  .sort-button {
    height: 80px;
    width: 150px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 24px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sort-option {
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
    ${mobile({ display: "none" })}
    ${tab({ display: "none" })}
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

  .category-select-container {
    margin-top: 20px;
    font-family: "Open Sans", sans-serif;
  }
  .category-select-title {
    font-size: 16px;
    padding-left: 10px;
    border: 1px solid #d1d1d1;
    border-radius: 8px 8px 0px 0px;
  }
  .area-select-container {
    margin-top: 20px;
    font-family: "Open Sans", sans-serif;
  }
  .category-select-option {
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
    display: block;
    padding: 0px 10px;
  }

  .product-list-page {
    width: 100%;
    padding: 30px 0px;
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

  @media only screen and (max-width: 576px) {
    .wrapper {
      width: 540px;
    }
    .filter-button {
      display: block;
    }
  }

  @media only screen and (max-width: 768px) {
    .wrapper {
      width: 760px;
    }
    .filter-button {
      display: block;
    }
  }
`;

export const Body = () => {
  return (
    <BodyStyle>
      <div className="filter-container-wrapper">
        <div className="filter-wrapper">
          <div className="filter-container">
            <div className="filter-button">Filter</div>
          </div>
          <div className="sort-continer">
            <button className="sort-button">
              <BiSortAlt2 />
              Sort By
              <IoMdArrowDropdown />
              <ul className="sort-option">
                <li className="sort-option-item">
                  <a className="sort-option-item-name" href="">
                    Relevence
                  </a>
                </li>
                <li className="sort-option-item">
                  <a className="sort-option-item-name" href="">
                    Popularity
                  </a>
                </li>
              </ul>
            </button>
          </div>
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
                  <CategoryList />
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
            <BuisnessList />
          </div>
        </div>
      </div>

      <div className="product-list-page">
        <div className="product-list-page-container">
          <div className="product-list-page-text">Showing page 1 of 1</div>
          <div className="product-list-page-number"></div>
        </div>
      </div>
    </BodyStyle>
  );
};
