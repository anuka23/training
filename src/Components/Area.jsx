import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import axios from 'axios'

const AreaStyle = styled.div`
    .area-container{
      height: 700px;
      border: 1px solid #d1d1d1;
      border-radius: 0px 0px 8px 8px;
      background-color: #fff;
      height: 700px;
      overflow: hidden;
      overflow-y: auto;
      color: #636363;
      
    }
    .area-name-container{
      padding: 8px ;
      display: flex;
      align-items: center;
    }
    .area-checkbox{
    height: 18px;
    width: 18px;
    border-radius: 8px;
    overflow: visible;
    }
    .area-name{
    font-size: 18px;
    padding: 0px 5px;
    }
`;

export const Area = () => {
  const [areas, setArea] = useState([])

  const getArea = () => {
    axios.get('https://staging.admin.haavoo.com/api/area?city=ernakulam')
    .then((response) => {
      console.log(response)
      setArea(response.data.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => getArea(), [])
  

  return (
    <AreaStyle>
        <div className="area-container">
            
                {
                  Object.values(areas).map((area, id) => (
                    <div className="area-name-container" key={id}>
                      <input className="area-checkbox" type= 'checkbox'></input>
                      <div className="area-name">
                      {area.name}
                    </div>
                    </div>
                  ))
                }
            
        </div>
    </AreaStyle>
  );
};
