import React from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import img1 from "../../Image/1610718616.png";
import img2 from "../../Image/1610718681.png";
import img3 from "../../Image/1610718645.png";
import img4 from "../../Image/1610718655.png";
import img5 from "../../Image/1610718666.png";

const CitySearchStyle = styled.div`
  .city-modal-background {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px 10px 10px 10px;
  }
  .city-modal-container {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 800px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    transition: transform 0.3s ease-out;
    position: relative;
    padding: 20px;
  }
  .modal-close-button {
    display: flex;
    justify-content: flex-end;
  }
  .city-modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .search-your-city {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .title-text {
    color: ;
  }
  .searchcity {
    width: 700px;
    height: 50px;
    border-radius: 8px;
    margin: 10px;
    padding: 15px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  .popular-city {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .city-container {
    width: 700px;
    height: 130px;
    margin-bottom: 30px;
  }
  .city-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e51c1c;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  .city {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0px 10px;
  }
  .city-image img {
    height: 80px;
  }
  .city-name {
    color: #fff;
    font-weight: 600;
    font-size: 15px;
  }
  .other-city {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .other-city-name {
    display: flex;
    flex-wrap: wrap;
    width: auto;
    margin-left: 25px;
  }
  .other-city-name a {
    font-size: 13px;
    margin-right: 120px;
    color: #636363;
  }
  .other-city-name a:hover {
    text-decoration: underline;
  }
`;

export const CitySearch = ({ openModal, setOpenModal }) => {
  return (
    <CitySearchStyle>
      <div className="city-modal-background">
        <div className="city-modal-container">
          <div
            className="modal-close-button"
            onClick={() => setOpenModal(false)}
          >
            <button className="close-button"></button>
          </div>
          <div className="city-modal-body">
            <section className="search-your-city">
              <h3 className="title-text">Search Your City or Location</h3>
              <div>
                <input
                  type="text"
                  placeholder="Search Your City"
                  className="searchcity"
                />
              </div>
            </section>
            <section className="popular-city">
              <h3 className="title-text">Popular Cities</h3>
              <div className="city-container">
                <div className="city-wrapper">
                  <div className="city">
                    <div className="city-image">
                      <img src={img1} alt="" />
                    </div>
                    <div className="city-name">Ernakulam</div>
                  </div>
                  <div className="city">
                    <div className="city-image">
                      <img src={img2} alt="" />
                    </div>
                    <div className="city-name">Kozhikode</div>
                  </div>
                  <div className="city">
                    <div className="city-image">
                      <img src={img3} alt="" />
                    </div>
                    <div className="city-name">Malappuram</div>
                  </div>
                  <div className="city">
                    <div className="city-image">
                      <img src={img4} alt="" />
                    </div>
                    <div className="city-name">Thiruvananthapuram</div>
                  </div>
                  <div className="city">
                    <div className="city-image">
                      <img src={img5} alt="" />
                    </div>
                    <div className="city-name">Thissur</div>
                  </div>
                </div>
              </div>
            </section>
            <section className="other-city">
              <h3 className="title-text">Other Cities</h3>
              <div className="other-city-name">
                <div className="name">
                  <a href="">Alappuzha</a>
                </div>
                <div className="name">
                  <a href="">Idukki</a>
                </div>{" "}
                <div className="name">
                  <a href="">Kannur </a>
                </div>
                <div className="name">
                  <a href="">Kasargod</a>
                </div>
                <div className="name">
                  <a href="">Kollam</a>
                </div>
                <div className="name">
                  <a href="">Kottayam</a>
                </div>
                <div className="name">
                  <a href="">Palakkad</a>
                </div>
                <div className="name">
                  <a href="">Pathanamthitta</a>
                </div>
                <div className="name">
                  <a href="">Wayanad</a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </CitySearchStyle>
  );
};
