import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import footer from "../../Image/footer-background.png";
import app from "../../Image/app-store-button.png";
import google from "../../Image/google-play-button.png";
import mobile from "../../Image/footer-mobile-app.png";
import {
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";


const FooterStyle = styled.div`
  width: 100%;
  height: 650px;
  .footer-background {
    width: 100%;
    position: relative;
    z-index: 1;
    height: 100%;
    background: #000 url(${footer}) no-repeat top;
    background-size: cover;
  }

  .container-wrapper {
    width: 100%;
    height: 650px;
    position: absolute;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.95);
    display: flex;
    justify-content: center;
  }
  .container {
    width: 1170px;
    display: flex;
    font-family: "Open Sans", sans-serif;
  }
  .contact-container {
    flex: 1;
    display: flex;
    padding-top: 40px;
    flex-direction: column;
    font-size: 22px;
    font-weight: 500;
    color: #fff;
  }
  .conatct-title {
    padding: 0px 5px;
  }
  .social-media {
    display: flex;
    padding: 0;
  }

  .social-media-link {
    padding: 0px 8px;
  }
  .social-media-link a {
    font-size: 40px;
    color: #fff;
  }
  .store-button {
    display: flex;
    padding: 0px 5px;
  }
  .app-store-button img {
    height: 50px;
  }
  .google-play-button img {
    height: 50px;
    margin-left: 20px;
  }
  .link-title {
    margin-top: 15px;
    padding: 0px 5px;
  }
  .link-item {
    display: flex;
  }
  .item {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
  .item-name {
    font-size: 18px;
    padding: 5px 0px;
  }
  .item-name a {
    color: #fff;
    font-weight: 300;
  }
  .item-name a:hover {
    text-decoration: underline;
  }

  .categories-container {
    width: 300px;
    display: flex;
    padding-top: 40px;
    flex-direction: column;
    color: #fff;
    
  }
  .categories-title{
    font-size: 22px;
    font-weight: 500;
  }
  .categories-item{
    font-size: 17px;
    display: flex;
    flex-wrap: wrap;
  }
  .category-name-container{
    padding-right: 40px;
    padding-top: 10px;
  }
  .mobile-app-container {
    display: flex;
    padding-top: 40px;
    flex-direction: column;
    font-size: 22px;
    font-weight: 500;
    color: #fff;
  }
  .mobile-app-image {
    display: flex;
    justify-content: center;
  }
  .mobile-app-container img {
    width: 95%;
    margin-top: 10px;
  }
  .copyright-container {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #e51c1c;
  }
  .copyright-wrapper {
    width: 1170px;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-family: "Open Sans", sans-serif;
    color: #fff;
    padding: 20px 0px;
  }
  .copyright-wrapper a {
    color: #fff;
    font-size: 18px;
    margin-left: 5px;
  }
  .copyright-wrapper a:hover {
    text-decoration: underline;
  }
`;

export const Footer = () => {
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
    <FooterStyle>
      <div className="footer-background">
        <div className="container-wrapper">
          <div className="container">
            <div className="contact-container">
              <div className="conatct-title">
                KEEP IN TOUCH
                <div className="social-media-container">
                  <ul className="social-media">
                    <li className="social-media-link">
                      <a className="facebook" href="">
                        <FaFacebookSquare />
                      </a>
                    </li>
                    <li className="social-media-link">
                      <a className="twitter" href="">
                        <FaTwitter />
                      </a>
                    </li>
                    <li className="social-media-link">
                      <a className="youtube" href="">
                        <FaYoutube />
                      </a>
                    </li>
                    <li className="social-media-link">
                      <a className="linkedin" href="">
                        <FaLinkedin />
                      </a>
                    </li>
                    <li className="social-media-link">
                      <a className="instagram" href="">
                        <GrInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="store-button">
                <div className="app-store-button">
                  <a href="">
                    <img src={app} alt="" />
                  </a>
                </div>
                <div className="google-play-button">
                  <a href="">
                    <img src={google} alt="" />
                  </a>
                </div>
              </div>

              <div className="link-title">
                USEFUL LINKS
                <div className="link-item">
                  <ul className="item">
                    <li className="item-name">
                      <a href="">Contact Us</a>
                    </li>
                    <li className="item-name">
                      <a href="">About Us</a>
                    </li>
                    <li className="item-name">
                      <a href="">Privacy Policy</a>
                    </li>
                    <li className="item-name">
                      <a href="">Terms and Condition</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div></div>
            </div>

            <div className="categories-container">
              <div className="categories-title">
                LISTING BY CATEGORIES
                </div>
                <div className="categories-item">
                {
                    Object.values(category).map((categories, id) => (
                    <div className="category-name-container" key={id}>
                    {categories.name}
                    </div>
           ))
         }
                
              </div>
            </div>


            <div className="mobile-app-container">
              <div className="mobile-app-title">
                BOOK PROFESSIONALS FROM YOUR PHONE
              </div>
              <div className="mobile-app-image">
                <img src={mobile} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <div className="copyright-wrapper">
          <div className="copyright-text1">
            Copyright © 2020 Haavoo. All Rights Reserved.
          </div>
          <div className="copyright-text2">
            Designed and developed by
            <a href="https://tarkashilpa.com/">tarkashilpa.com</a>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};
