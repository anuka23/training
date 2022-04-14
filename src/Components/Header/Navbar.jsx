import styled from "styled-components/macro";
import { useState } from "react";
import cover from "../../Image/cover.jpg";
import logo from "../../Image/logo.png";
import { MdLocationOn } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { mobile } from "../../responsive";
import { tab } from "../../responsive";
import { MobileView } from "./MobileView/MobileView";
import { CitySearch } from "../CitySearch/CitySearch";

const NavbarStyle = styled.div`
  width: 100%;
  height: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: relative;
  z-index: 1;
  font-family: Open Sans, sans-serif;
`;
const Background = styled.div`
  width: 100%;
  background: no-repeat top;
  background-size: cover;
  background-image: linear-gradient(180deg, #000, transparent), url(${cover});
  position: absolute;
  z-index: 1;
  height: 100%;
`;
const Top = styled.div`
  position: relative;
  padding: 5px;
  z-index: 2;
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;
const TopStrip = styled.div`
  width: 1170px;
  display: block;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Open Sans, sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #fff;
`;
const MobView = styled.div`
  display: none;
  width: 100%;
  ${mobile({ display: "flex" })}
  ${tab({ display: "flex" })}
`;
const CustomerCare = styled.span`
  ${mobile({ display: "none" })}
  ${tab({ display: "none" })}
`;
const Location = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  ${mobile({ display: "none" })}
  ${tab({ display: "none" })}
`;
const Icon = styled.div`
  margin: 0px 5px;
  font-size: 20px;
`;
const Desc = styled.span`
  margin: 0px 5px;
`;
const LocationButton = styled.button`
  margin: 0px 5px;
  padding: 5px 16px;
  border: 1px solid #fff;
  border-radius: 30px;
  background-color: transparent;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
`;
const Center = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CenterContainer = styled.div`
  width: 1170px;
  margin: 10px;
  display: flex;
  justify-content: space-around;
`;
const Left = styled.div`
  height: 100%;
  flex: 1;
  ${mobile({ display: "flex", justifyContent: "center" })}
  ${tab({ display: "flex", justifyContent: "center" })}
`;
const Logo = styled.a`
  display: flex;
  ${mobile({ height: "80px" })}
  ${tab({ height: "80px" })}
`;
const Img = styled.img`
  height: 55px;
  ${mobile({ height: "45px" })}
  ${tab({ height: "45px" })}
`;
const Middle = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 0;
  ${mobile({ display: "none" })}
  ${tab({ display: "none" })}
`;
const Item = styled.ul`
  a {
    font-size: 16px;
    color: #fff;
    transition: 0.2s ease;
    &:hover {
      color: #e51c1c;
    }
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({ display: "none" })}
  ${tab({ display: "none" })}
`;
const RegisterButton = styled.button`
  border: none;
  margin-right: 5px;
  background-color: #ff9000;
  color: #fff;
  border-radius: 50px 50px 50px 50px;
  padding: 10px 18px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
const LoginButton = styled.button`
  border: none;
  background-color: #e51c1c;
  color: #fff;
  border-radius: 50px 50px 50px 50px;
  padding: 10px 18px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const Bottom = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  .search-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container {
    width: 1170px;
    height: 100%;
    display: flex;
    margin: 5px;
    align-items: center;
    flex-wrap: wrap;
  }
  .area-search-container {
    height: 60px;
    flex: 2;
    margin: 8px;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 12px;
    cursor: pointer;
  }
  .area-search-inner-text {
    width: 100%;
    margin: 0px 15px;
    display: flex;
    align-items: center;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    justify-content: space-between;
  }
  .icon {
    font-size: 30px;
    display: flex;
    align-items: center;
    color: lightgrey;
  }
  .random-search-container {
    height: 60px;
    flex: 3;
    margin: 8px;
    display: flex;
    justify-content: space-between;
  }
  .random-search-input {
    border: none;
    padding: 0px 20px;
    width: 100%;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    background-color: #fff;
    border-radius: 12px 0px 0px 12px;
  }
  .search-button {
    width: 70px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 12px 12px 0px;
    background-color: #e51c1c;
    border: none;
    color: #fff;
  }

  @media only screen and (max-width: 576px) {
    .container {
      max-width: 540px;
      display: block;
    }
    .area-search-container {
      height: 50px;
    }
    .random-search-container {
      height: 50px;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      max-width: 720px;
    }
    .area-search-container {
      height: 50px;
    }
    .random-search-container {
      height: 50px;
    }
  }
`;

export const Navbar = ({ searchUpdatedInput }) => {
  const [openModal, setOpenModal] = useState(false);
  var searchValue;

  const setSearch = (value) => {
    searchValue = value;
  };

  const searchBuisnesses = () => {
    searchUpdatedInput(searchValue);
  };

  return (
    <NavbarStyle>
      <Background />
      <Top>
        <TopContainer>
          <TopStrip>
            <CustomerCare>Customer Care: +91 90747 97177</CustomerCare>
            <Location>
              <Icon>
                <MdLocationOn />
              </Icon>
              <Desc>Select Location</Desc>
              <LocationButton onClick={() => setOpenModal(true)}>
                Ernakulam
                <IoMdArrowDropdown />
              </LocationButton>
              {openModal && (
                <CitySearch openModal={openModal} setOpenModal={setOpenModal} />
              )}
            </Location>

            <MobView>
              <MobileView />
            </MobView>
          </TopStrip>
        </TopContainer>
      </Top>
      <Center>
        <CenterContainer>
          <Left>
            <Logo>
              <Img src={logo} />
            </Logo>
          </Left>
          <Middle>
            <Item>
              <NavLink to="/">Home</NavLink>
            </Item>
            <Item>
              <NavLink to="about us">About Us</NavLink>
            </Item>
            <Item>
              <NavLink to="contact">Contact</NavLink>
            </Item>
          </Middle>
          <Right>
            <RegisterButton>Register My Buisness</RegisterButton>
            <LoginButton>
              Login/Sign Up <IoMdArrowDropdown />
            </LoginButton>
          </Right>
        </CenterContainer>
      </Center>

      <Bottom>
        <div className="search-container">
          <div className="container">
            <div className="area-search-container">
              <div className="area-search-inner-text">
                Any Area
                <div className="icon">
                  <IoMdArrowDropdown />
                </div>
              </div>
            </div>
            <div className="random-search-container">
              <input
                className="random-search-input"
                placeholder="Search for anything"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              ></input>
              <button
                className="search-button"
                onClick={() => {
                  searchBuisnesses();
                }}
              >
                <FiSearch />
              </button>
            </div>
          </div>
        </div>
      </Bottom>
    </NavbarStyle>
  );
};
