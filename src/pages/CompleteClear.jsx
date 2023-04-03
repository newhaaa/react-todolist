import React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";

const DoneHeader = styled.div`
  text-align: center;
  .done-title {
    font-size: 25px;
    margin: 0px;
  }
  .cheerup {
    font-size: 25px;
    color: rgba(0, 0, 0, 0.5);
    margin: 8px 0px 0px 0px;
  }
`;

function CompleteClear() {
  return (
    <>
      <DoneHeader>
        <p className="done-title">DONE LIST</p>
        <p className="cheerup">You can finish your work!</p>
      </DoneHeader>
      <div className="image-area">
        <img src="../assets/yanudu.png" />
        <img src="../assets/maimage.png" />
      </div>
      <Nav />
    </>
  );
}

export default CompleteClear;
