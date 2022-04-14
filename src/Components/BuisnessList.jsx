import styled from "styled-components/macro";
import { useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import placeholder from "../Image/placeholder.png";
import { Loader } from "./Loader";

const BuisnessListStyle = styled.div`
  .buisness-list-container {
    align-items: center;
  }

  .buisness-list-wrapper {
    margin: 20px 0px;
  }
  .buisness-list {
    padding-left: 0;
  }
  .buisness-list-item {
    background-color: #fff;
    padding: 25px;
    border: 1px solid #d1d1d1;
    margin-bottom: 20px;
    border-radius: 8px 8px 8px 8px;
  }
  .buisness {
    display: flex;
    flex-wrap: wrap;
  }
  .buisness-image-container {
    flex: 1;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  .buisness-image {
    display: block;
    overflow: hidden;
    height: auto;
    border-radius: 7px 7px 7px 7px;
  }
  .buisness-image img {
    width: 100%;
    border-radius: 8px;
  }
  .buisness-info-container {
    flex: 1;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  .buisness-info {
    height: auto;
    padding: 0px 30px;
    font-family: "Open Sans", sans-serif;
  }
  .buisness-info .title {
    font-size: 24px;
    margin: 0px;
    font-weight: 500;
  }
  .buisness-info .category {
    font-size: 18px;
    margin: 5px 0px;
    color: #636363;
  }
  .buisness-info .category span {
    font-weight: 500;
    color: #000;
  }
  .buisness-info .area {
    font-size: 18px;
    margin-top: 10px;
    color: #636363;
  }
  .buisness-info .area span {
    font-weight: 500;
    color: #000;
    margin-right: 5px;
  }
  .buisness-info .desc {
    font-size: 16px;
    color: #636363;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  }
  .buisness-info .button .theme-button {
    font-size: 18px;
    width: 260px;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    color: #fff;
    background-color: #e51c1c;
    border: none;
    border-radius: 30px;
    box-shadow: 3px 3px 3px rgb(0 0 0 / 20%);
    padding: 8px 0px;
  }
`;

export const BuisnessList = ({ updatedValue }) => {
  const status = useStoreState((state) => state.status);
  const buisnesses = useStoreState((state) => state.list);
  const fetchBuisnesses = useStoreActions((actions) => actions.fetchBuisnesses);

  useEffect(() => fetchBuisnesses(updatedValue), [updatedValue]);

  return (
    <BuisnessListStyle>
      <div className="buisness-list-container">
        <div className="buisness-list-wrapper">
          <ul className="buisness-list">
            {buisnesses &&
              buisnesses.length > 0 &&
              buisnesses.map((buisness) => (
                <li className="buisness-list-item" key={buisness.id}>
                  <div className="buisness">
                    <div className="buisness-image-container">
                      <div className="buisness-image">
                        <img
                          src={
                            buisness?.medias[0]?.path
                              ? "https://staging.admin.haavoo.com/app-images/" +
                                buisness?.medias[0]?.path
                              : placeholder
                          }
                          alt="No Image Available"
                        />
                      </div>
                    </div>

                    <div className="buisness-info-container">
                      <div className="buisness-info">
                        <p className="title">{buisness?.business_name}</p>

                        <p className="category">
                          <span>Category :</span>{" "}
                          {buisness?.categories[0]?.name}
                        </p>

                        <p className="area">
                          <span>Area :</span>
                          {buisness?.areas[0]?.name}
                        </p>

                        <p
                          className="desc"
                          dangerouslySetInnerHTML={{
                            __html: buisness?.description,
                          }}
                        ></p>
                        <p className="button">
                          <button className="theme-button">
                            Show the Contact Details
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </BuisnessListStyle>
  );
};
