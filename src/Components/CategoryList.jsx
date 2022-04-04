import axios from "axios";
import { useStoreActions } from "easy-peasy";
import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";

const CategoryListStyle = styled.div`
  .category-name-container {
    display: flex;
    align-items: center;
    padding: 8px;
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
`;

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const fetchCategories = useStoreActions((actions) => actions.fetchCategories);

  const getCategory = () => {
    axios
      .get("https://staging.admin.haavoo.com/api/category")
      .then((response) => {
        console.log(response);
        setCategories(response.data.data);
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
    fetchCategories(newValue);
  };

  return (
    <CategoryListStyle>
      <div className="category-container">
        {Object.values(categories).map((category, id) => (
          <div className="category-name-container" key={id}>
            <input
              className="category-checkbox"
              type="checkbox"
              onChange={() => {
                searchCategories(category.slug);
              }}
            ></input>
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </div>
    </CategoryListStyle>
  );
};
