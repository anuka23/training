import React from "react";
import styled from "styled-components";

const SubCategoryListStyle = styled.div``;

export const SubCategoryList = ({ category }) => {
  return (
    <SubCategoryListStyle>
      <div className="drop-down-wrapper">
        <div className="drop-down-container">
          <div className="drop-down">
            <input
              className="category-checkbox"
              type="checkbox"
              onChange={() => {
                searchCategories(category.child.slug);
              }}
            ></input>
            <div className="category-name">{category.child.name}</div>
          </div>
        </div>
      </div>
    </SubCategoryListStyle>
  );
};
