import React from "react";
import styled from "styled-components/macro";
import img1 from "../Image/img1.jpg";
import img2 from "../Image/img2.jpeg";
import img3 from "../Image/img3.jpeg";
import img4 from "../Image/img4.jpg";
import img5 from "../Image/img5.jpg";
import img6 from "../Image/img6.jpeg";
import img7 from "../Image/img7.jpg";
import img8 from "../Image/img8.jpg";
import img9 from "../Image/img9.jpg";
import img10 from "../Image/img10.jpg";

const ProductListStyle = styled.div`
  .product-list-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .tag-container {
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    font-size: 28px;
    font-weight: 500;
    font-family: "Open Sans", sans-serif;
  }
  .buisness-tag {
    flex: 1;
    background-color: #ff9000;
    border-radius: 8px 0px 0px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid lightgrey;
  }
  .buisness-tag a {
    color: #000;
  }
  .deal-tag {
    background-color: #fff;
    border-radius: 0px 8px 8px 0px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid lightgrey;
  }
  .deal-tag a {
    color: #000;
  }

  .product-list-wrapper {
    display: flex;
    margin: 20px 0px;
  }
  .product-list {
    width: 100%;
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: column;
  }
  .product-list-item {
    margin-top: 20px;
    padding: 25px;
    display: flex;
    background-color: #fff;
    border-radius: 9px;
    border: 1px solid lightgrey;
  }
  .product {
    display: flex;
    justify-content: space-between;
  }
  .product-image img {
    height: 240px;
    width: 400px;
    border-radius: 8px;
  }
  .product-info {
    height: 240px;
    margin-left: 30px;
    font-family: "Open Sans", sans-serif;
  }
  .product-info .title {
    font-size: 24px;
    margin: 0px;
    font-weight: 500;
  }
  .product-info .category {
    font-size: 18px;
    margin: 5px 0px;
    color: #636363;
  }
  .product-info .category span {
    font-weight: 500;
    color: #000;
  }
  .product-info .area {
    font-size: 18px;
    margin-top: 10px;
    color: #636363;
  }
  .product-info .area span {
    font-weight: 500;
    color: #000;
  }
  .product-info .desc {
    font-size: 16px;
    color: #636363;
  }
  .product-info .button .theme-button {
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

export const ProductList = () => {
  return (
    <ProductListStyle>
      <div className="product-list">
        <section className="product-list-container">
          <div className="tag-container">
            <div className="buisness-tag">
              <a href="">Buisnesses</a>
            </div>
            <div className="deal-tag">
              <a href="">Deals</a>
            </div>
          </div>
          <div className="product-list-wrapper">
            <ul className="product-list">
              <li className="product-list-item">
                <div className="product">
                  <div className="product-image">
                    <img src={img1} alt="" />
                  </div>
                  <div className="product-info">
                    <p className="title">ADNOX Gents wear</p>
                    <p className="category">
                      <span>Category :</span> Clothes
                    </p>
                    <p className="area">
                      <span>Area :</span> Perinthalmanna
                    </p>
                    <p className="desc">
                      Exclusive collections of latest selections. Branded and
                      semi branded items Complete Gents wear shop...
                    </p>
                    <p className="button">
                      <button className="theme-button">
                        Show the Contact Details
                      </button>
                    </p>
                  </div>
                </div>
              </li>

              <li className="product-list-item">
                <div className="product">
                  <div className="product-image">
                    <img src={img2} alt="" />
                  </div>
                  <div className="product-info">
                    <p className="title">Kairali Paints</p>
                    <p className="category">
                      <span>Category :</span> Paints
                    </p>
                    <p className="area">
                      <span>Area :</span> Edakkara
                    </p>
                    <p className="desc">
                      All sorts of paints available for commercial and
                      residential. Major paints are Jotun paint, Asian P...
                    </p>
                    <p className="button">
                      <button className="theme-button">
                        Show the Contact Details
                      </button>
                    </p>
                  </div>
                </div>
              </li>

              <li className="product-list-item">
                <div className="product">
                  <div className="product-image">
                    <img src={img3} alt="" />
                  </div>
                  <div className="product-info">
                    <p className="title">Bata</p>
                    <p className="category">
                      <span>Category :</span> Footwear
                    </p>
                    <p className="area">
                      <span>Area :</span> Perinthalmanna
                    </p>
                    <p className="desc">
                      All types of shoes, chappals for Gents, ladies, and kids.
                      Sport shoes Casual Shoes
                    </p>
                    <p className="button">
                      <button className="theme-button">
                        Show the Contact Details
                      </button>
                    </p>
                  </div>
                </div>
              </li>

              <li className="product-list-item">
                <div className="product">
                  <div className="product-image">
                    <img src={img4} alt="" />
                  </div>
                  <div className="product-info">
                    <p className="title">MENZ CLUB</p>
                    <p className="category">
                      <span>Category :</span> Clothes
                    </p>
                    <p className="area">
                      <span>Area :</span> Kottakkal
                    </p>
                    <p className="desc">
                      complete menz wear branches all over Kerala/UAE/KSA
                    </p>
                    <p className="button">
                      <button className="theme-button">
                        Show the Contact Details
                      </button>
                    </p>
                  </div>
                </div>
              </li>

              <li className="product-list-item">
                <div className="product">
                  <div className="product-image">
                    <img src={img5} alt="" />
                  </div>
                  <div className="product-info">
                    <p className="title">ORGIN</p>
                    <p className="category">
                      <span>Category :</span>Mobiles & Laptop
                    </p>
                    <p className="area">
                      <span>Area :</span> Calicut
                    </p>
                    <p className="desc">
                      Mobile Sales, Services and Accessories.
                    </p>
                    <p className="button">
                      <button className="theme-button">
                        Show the Contact Details
                      </button>
                    </p>
                  </div>
                </div>
              </li>

              <li className="product-list-item">
                <div className="product">
                  <div className="product-image">
                    <img src={img6} alt="" />
                  </div>
                  <div className="product-info">
                    <p className="title">AL-FYMS</p>
                    <p className="category">
                      <span>Category :</span> Financial Services
                    </p>
                    <p className="area">
                      <span>Area :</span> Calicut
                    </p>
                    <p className="desc">
                      Available Foreign Money Exchange Facility.
                    </p>
                    <p className="button">
                      <button className="theme-button">
                        Show the Contact Details
                      </button>
                    </p>
                  </div>
                </div>
              </li>

              <li className="product-list-item">
                <div className="product">
                  <div className="product-image">
                    <img src={img7} alt="" />
                  </div>
                  <div className="product-info">
                    <p className="title">my mobile</p>
                    <p className="category">
                      <span>Category :</span>Mobiles & Laptop
                    </p>
                    <p className="area">
                      <span>Area :</span>Calicut
                    </p>
                    <p className="desc">
                      Mobile Sales, Services and Accessories.
                    </p>
                    <p className="button">
                      <button className="theme-button">
                        Show the Contact Details
                      </button>
                    </p>
                  </div>
                </div>
              </li>

              <li className="product-list-item">
                <div className="product">
                  <div className="product-image">
                    <img src={img8} alt="" />
                  </div>
                  <div className="product-info">
                    <p className="title">MARKAZ AL ATTAR</p>
                    <p className="category">
                      <span>Category :</span> Perfumes
                    </p>
                    <p className="area">
                      <span>Area :</span> Calicut
                    </p>
                    <p className="desc">
                      Available Agar Oodh, All Kinds of Indian Perfumes, Attars.
                    </p>
                    <p className="button">
                      <button className="theme-button">
                        Show the Contact Details
                      </button>
                    </p>
                  </div>
                </div>
              </li>

              <li className="product-list-item">
                <div className="product">
                  <div className="product-image">
                    <img src={img9} alt="" />
                  </div>
                  <div className="product-info">
                    <p className="title">Radix Cell Phone Care Centre</p>
                    <p className="category">
                      <span>Category :</span> Mobiles & Laptop
                    </p>
                    <p className="area">
                      <span>Area :</span> Calicut
                    </p>
                    <p className="desc">
                      Mobile Sales, Services and Accessories.
                    </p>
                    <p className="button">
                      <button className="theme-button">
                        Show the Contact Details
                      </button>
                    </p>
                  </div>
                </div>
              </li>

              <li className="product-list-item">
                <div className="product">
                  <div className="product-image">
                    <img src={img10} alt="" />
                  </div>
                  <div className="product-info">
                    <p className="title">CELL ZONE | SPARE ZONE</p>
                    <p className="category">
                      <span>Category :</span> Mobiles & Laptop
                    </p>
                    <p className="area">
                      <span>Area :</span> Calicut
                    </p>
                    <p className="desc">
                      Mobile Sales, Services and Accessories.
                    </p>
                    <p className="button">
                      <button className="theme-button">
                        Show the Contact Details
                      </button>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </ProductListStyle>
  );
};
