import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarStyle = styled.div`
  position: absolute;
  z-index: 3;
  top: 50px;
  left: 0;
  right: 0;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 5px 5px 5px 5px;

  .sidebar-menu-item {
    z-index: 3;
  }

  .menu-item {
    padding: 10px;
  }
  .menu-item a {
    color: #fff;
    font-size: 1rem;
  }
`;

export const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <SidebarStyle>
      <div className="sidebar-menu-item" onClick={() => setIsOpen(!isOpen)}>
        <div className="menu-item">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="about us">About us</NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="contact">Contact</NavLink>
        </div>
      </div>
    </SidebarStyle>
  );
};
