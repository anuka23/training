import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sidebar } from "./Sidebar";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";

const MobileViewStyle = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-side-container {
    display: flex;
    align-items: center;
  }
  .sidebar-icon {
    font-size: 38px;
  }
  .location-select-button {
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 2px 10px;
    margin-left: 15px;
    border: 1px solid #fff;
    border-radius: 20px;
    background-color: transparent;
    color: #fff;
  }
  .right-side-container {
    display: flex;
    align-items: center;
  }
  .register-button {
    background-color: transparent;
    color: #fff;
    font-size: 1rem;
    border: none;
    padding: 10px 18px;
    background-color: #ff9000;
    border-radius: 50px;
    font-weight: 600;
  }

  .login-button {
    background-color: transparent;
    color: #fff;
    font-size: 1rem;
    border: none;
    padding: 10px 18px;
    background-color: #e51c1c;
    border-radius: 50px;
    margin-left: 10px;
    font-weight: 600;
  }

  @media only screen and (max-width: 576px) {
    .register-button {
      display: none;
    }
  }
`;

export const MobileView = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MobileViewStyle>
      <div className="left-side-container">
        <div className="sidebar-container">
          <div
            className="sidebar-icon"
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <GiHamburgerMenu />
          </div>
          {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>

        <div className="location-select-container">
          <button className="location-select-button">
            Ernakulam
            <IoMdArrowDropdown />
          </button>
        </div>
      </div>

      <div className="right-side-container">
        <div className="button-container">
          <button className="register-button">Register My Buisness</button>
          <button className="login-button">
            Login/Sign Up
            <IoMdArrowDropdown />
          </button>
        </div>
      </div>
    </MobileViewStyle>
  );
};
