import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SortStyle = styled.div`
  position: absolute;
  background-color: #fff;
  text-align: center;
  margin-top: 167px;
  .sort-option {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: 400;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
  }
  .sort-option-item {
    padding: 2px;
    width: 100%;
  }
  .sort-option-item a {
    color: #000;
  }
`;

export const Sort = ({ isOpen, setIsOpen, sort }) => {
  const sortItem = (value) => {
    sort(value);
  };

  return (
    <SortStyle>
      <div className="sort-list" onClick={() => setIsOpen(!isOpen)}>
        <ul className="sort-option">
          <li className="sort-option-item">
            <NavLink
              to=""
              onClick={() => {
                sortItem("relevence");
              }}
            >
              Relevence
            </NavLink>
          </li>
          <li className="sort-option-item">
            <NavLink
              to=""
              onClick={() => {
                sortItem("popularity");
              }}
            >
              Popularity
            </NavLink>
          </li>
          <li className="sort-option-item">
            <NavLink
              to=""
              onClick={() => {
                sortItem("distance");
              }}
            >
              Distance
            </NavLink>
          </li>
        </ul>
      </div>
    </SortStyle>
  );
};
