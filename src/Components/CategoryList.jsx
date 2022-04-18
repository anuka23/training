import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { RiArrowDropDownLine } from "react-icons/ri";

const CategoryListStyle = styled.div`
  .category-name-container {
    padding: 8px;
  }
  .category-wrapper {
    display: flex;
    align-items: center;
  }
  .category {
    display: flex;
    justify-content: space-between;
  }
  .category-checkbox {
    height: 18px;
    width: 18px;
    border-radius: 8px;
    overflow: visible;
  }
  .category-name {
    font-size: 18px;
    padding: 0px 5px;
  }
  .category-drop-down-arrow {
    text-align: end;
  }
  .drop-down {
    display: flex;
  }
`;

export const CategoryList = ({ searchUpdatedCategories }) => {
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);

  // const fetchCategories = useStoreActions((actions) => actions.fetchCategories);

  const getCategory = () => {
    axios
      .get("https://staging.admin.haavoo.com/api/category")
      .then((response) => {
        console.log(response);
        setCategories(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => getCategory(), []);

  const searchCategories = (value) => {
    const currentValue = checked.indexOf(value);
    const newValue = [...checked];

    if (checked.includes(value)) {
      newValue.splice(currentValue, 1);
    } else {
      newValue.push(value);
    }
    setChecked(newValue);
    searchUpdatedCategories(newValue);
  };

  return (
    <CategoryListStyle>
      <div className="category-container">
        {categories &&
          categories.map((category, id) => (
            <div className="category-name-container" key={id}>
              <div className="category">
                <div className="category">
                  <input
                    className="category-checkbox"
                    type="checkbox"
                    onChange={() => {
                      searchCategories(category.slug);
                    }}
                  ></input>
                  <div className="category-name">{category.name}</div>
                </div>
                <div className="category-drop-down-arrow">
                  <RiArrowDropDownLine />
                </div>
              </div>
            </div>
          ))}
      </div>
    </CategoryListStyle>
  );
};
