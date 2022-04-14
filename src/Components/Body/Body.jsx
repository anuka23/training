import React from "react";
import styled from "styled-components/macro";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSortAlt2 } from "react-icons/bi";
import { Area } from "../Area";
import { BuisnessList } from "../BuisnessList";
import { CategoryList } from "../CategoryList";
import { mobile } from "../../responsive";
import { tab } from "../../responsive";
import { Sort } from "../Sort";
import { useState } from "react";
import { Navbar } from "../Header/Navbar";
import { NavLink, Route, Routes } from "react-router-dom";
import { DealsList } from "../DealsList";
import { Footer } from "../Footer/Footer";
import { Pagination } from "../Pagination";
import { useStoreState } from "easy-peasy";
import { Loader } from "../Loader";

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
    width: 100%;
    display: block;
    padding: 0px 10px;
  }
  .buisness-tag-container {
    width: 100%;
    height: 65px;
    display: flex;
    cursor: pointer;
  }
  .buisness-tag {
    width: 100%;
    display: flex;
    font-size: 28px;
    font-weight: 500;
    font-family: "Open Sans", sans-serif;
  }
  .buisness-tag a {
    color: #000;
    background-color: #fff;
    width: 50%;
    display: block;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    padding: 12px 20px;
    border: 1px solid #d1d1d1;
    text-decoration: none;
  }
  .buisness-tag a:first-child {
    border-radius: 7px 0 0 7px;
  }
  .buisness-tag a:last-child {
    border-radius: 0 7px 7px 0;
  }
  .buisness-tag a.active {
    background-color: #ff9000;
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
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState([]);
  const buisnesses = useStoreState((state) => state.list);

  const searchType = (value) => {
    const currentValue = checked.indexOf(value);
    const newValue = [...checked];

    if (checked.includes(value)) {
      newValue.splice(currentValue, 1);
    } else {
      newValue.push(value);
    }
    setChecked(newValue);
    searchUpdatedType(newValue);
  };

  const [updatedValue, setUpdatedValue] = useState({
    categories: [""],
    areas: [""],
    sort: [""],
    search_query: "",
    type: [""],
    page: [],
  });

  const searchUpdatedType = (value) => {
    const updatedValueNew = { ...updatedValue };
    updatedValueNew.type = value;
    setUpdatedValue(updatedValueNew);
  };

  const searchUpdatedInput = (value) => {
    const updatedValueNew = { ...updatedValue };
    updatedValueNew.search_query = value;
    setUpdatedValue(updatedValueNew);
  };

  const searchUpdatedCategories = (value) => {
    const updatedValueNew = { ...updatedValue };
    updatedValueNew.categories = value;
    setUpdatedValue(updatedValueNew);
  };

  const searchUpdatedAreas = (value) => {
    const updatedValueNew = { ...updatedValue };
    updatedValueNew.areas = value;
    setUpdatedValue(updatedValueNew);
  };

  const searchUpdatedPage = (value) => {
    const updatedValueNew = { ...updatedValue };
    updatedValueNew.page = value;
    setUpdatedValue(updatedValueNew);
  };

  const sort = (value) => {
    const updatedValueNew = { ...updatedValue };
    updatedValueNew.sort = value;
    setUpdatedValue(updatedValueNew);
  };

  return (
    <BodyStyle>
      <Loader />
      <Navbar searchUpdatedInput={searchUpdatedInput} />
      <div className="filter-container-wrapper">
        <div className="filter-wrapper">
          <div className="filter-container">
            <div className="filter-button">Filter</div>
          </div>
          <div className="sort-continer">
            <div
              className="sort-button"
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <BiSortAlt2 />
              Sort By
              <IoMdArrowDropdown />
              {isOpen && (
                <Sort isOpen={isOpen} setIsOpen={setIsOpen} sort={sort} />
              )}
            </div>
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
                    <div
                      className="checkbox-option"
                      onChange={(e) => {
                        searchType(e.target.value);
                      }}
                    >
                      <input
                        className="checkbox-input"
                        type="checkbox"
                        value="Individual"
                      ></input>
                      <label className="checkbox-label">Individual</label>
                    </div>
                    <div
                      className="checkbox-option"
                      onChange={(e) => {
                        searchType(e.target.value);
                      }}
                    >
                      <input
                        className="checkbox-input"
                        type="checkbox"
                        value="Shop_Office"
                      ></input>
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
                  <CategoryList
                    searchUpdatedCategories={searchUpdatedCategories}
                  />
                </div>
              </div>

              <div className="area-select-container">
                <div className="area-select-title">
                  <h3>Area</h3>
                </div>
                <div className="area-select-option">
                  <Area searchUpdatedAreas={searchUpdatedAreas} />
                </div>
              </div>
            </div>
          </aside>

          <div className="product-container">
            <div className="buisness-tag-container">
              <div className="buisness-tag">
                <NavLink id="buisness" to="buisness">
                  Buisnesses
                </NavLink>
                <NavLink to="deals">Deals</NavLink>
              </div>
            </div>

            <Routes>
              <Route
                path="deals"
                element={<DealsList updatedValue={updatedValue} />}
              />
              <Route
                path="buisness"
                element={<BuisnessList updatedValue={updatedValue} />}
              />
            </Routes>
          </div>
        </div>
      </div>

      <div className="product-list-page">
        <div className="product-list-page-number">
          <Pagination searchUpdatedPage={searchUpdatedPage} />
        </div>
      </div>
      <Footer />
    </BodyStyle>
  );
};
