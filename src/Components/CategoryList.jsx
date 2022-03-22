import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";

const CategoryListStyle = styled.div`
    .category-name-container{
      display: flex;
      align-items: center;
      padding: 8px;
    }
    .category-checkbox{
    height: 18px;
    width: 18px;
    border-radius: 8px;
    overflow: visible;
  }
  .category-name{
    font-size: 18px;
    padding: 0px 5px;
  }
  
`;

export const CategoryList = () => {
  const [category, setCategory] = useState([])

  const getCategory = () => {
    axios.get('https://staging.admin.haavoo.com/api/category')
    .then((response) => {
      console.log(response)
      setCategory(response.data.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => getCategory(), [])
  

  return (
    <CategoryListStyle>
      <div className="category-container">
         {
           Object.values(category).map((categories, id) => (
             <div className="category-name-container" key={id}>
               <input className="category-checkbox" type='checkbox'></input>
               <div className="category-name">
               {categories.name}
               </div>
             </div>
           ))
         }
      </div>
    </CategoryListStyle>
  );
};
