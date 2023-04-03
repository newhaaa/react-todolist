import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
const Footer = styled.div`
  display: fixed;
  bottom: 38px;
`;
const NavBox = styled.div`
  width: 331px;
  height: 63px;
  padding: 14px, 30px, 14px, 30px;
  border-radius: 31px;
  border: 2px solid black;
  background-color: #8bb897;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 30px;
`;
function Nav() {
  return (
    <Footer>
      <NavBox>
        {/* <Link to="/all">all</Link>
        <Link to="/">ongoing</Link>
        <Link to="/done">complete</Link> */}
        <div>all</div>
        <div>ongning</div>
        <div>complete</div>
      </NavBox>
    </Footer>
  );
}

export default Nav;
