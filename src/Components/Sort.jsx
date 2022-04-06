import React from "react";
import styled from "styled-components";

const SortStyle = styled.div``;

export const Sort = () => {
  return (
    <SortStyle>
      <div className="sort-list">
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
      </div>
    </SortStyle>
  );
};
