import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import React from "react";
import styled from "styled-components";

const DealsListStyle = styled.div`
  .deals-list-container {
    align-items: center;
  }

  .deals-list-wrapper {
    margin: 20px 0px;
  }
  .deals-list {
    padding-left: 0;
  }
  .deals-list-item {
    background-color: #fff;
    padding: 25px;
    border: 1px solid #d1d1d1;
    margin-bottom: 20px;
    border-radius: 8px 8px 8px 8px;
  }
  .deals {
    display: flex;
    flex-wrap: wrap;
  }
  .deals-image-container {
    flex: 1;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  .deals-image {
    display: block;
    overflow: hidden;
    height: auto;
    border-radius: 7px 7px 7px 7px;
  }
  .deals-image img {
    width: 100%;
    border-radius: 8px;
  }
  .deals-info-container {
    flex: 1;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  .deals-info {
    height: auto;
    padding: 0px 30px;
    font-family: "Open Sans", sans-serif;
  }
  .deals-info .title {
    font-size: 24px;
    margin: 0px;
    font-weight: 500;
  }
  .deals-info .category {
    font-size: 18px;
    margin: 5px 0px;
    color: #636363;
  }
  .deals-info .category span {
    font-weight: 500;
    color: #000;
  }
  .deals-info .area {
    font-size: 18px;
    margin-top: 10px;
    color: #636363;
  }
  .deals-info .area span {
    font-weight: 500;
    color: #000;
    margin-right: 5px;
  }
  .deals-info .desc {
    font-size: 16px;
    color: #636363;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  }
  .deals-info .button .theme-button {
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

export const DealsList = () => {
  const deals = useStoreState((state) => state.dealslist);
  const fetchDeals = useStoreActions((actions) => actions.fetchDeals);

  useEffect(() => {
    fetchDeals();
  }, []);

  return (
    <DealsListStyle>
      <div className="deals-list-container">
        <div className="deals-list-wrapper">
          <ul className="deals-list">
            {deals &&
              deals.length > 0 &&
              deals.map((deal) => (
                <li className="deals-list-item" key={deal.id}>
                  <div className="deals">
                    <div className="deals-image-container">
                      <div className="deals-image">
                        <img
                          src={
                            "https://staging.admin.haavoo.com/app-images/" +
                            deal?.medias[0]?.path
                          }
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="deals-info-container">
                      <div className="deals-info">
                        <p className="title">{deal?.business_name}</p>

                        <p className="category">
                          <span>Category :</span> {deal?.categories[0]?.name}
                        </p>

                        <p className="area">
                          <span>Area :</span>
                          {deal?.areas[0]?.name}
                        </p>

                        <p
                          className="desc"
                          dangerouslySetInnerHTML={{
                            __html: deal?.description,
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
    </DealsListStyle>
  );
};
