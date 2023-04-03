import React from "react";
import Nav from "../components/Nav";
import Task from "../components/Task";
import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 64px;
  margin: 0px;
`;
const ListTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  text-align: center;

  > .page-title {
    font-size: 25px;
    margin: 0px;
  }
  > .add-btn {
    margin-top: 12px;
    width: 133px;
    height: 37px;
    border-radius: 30px;
    background-color: #eb918e;
    font-size: 17px;
    text-align: center;
  }
`;
const ListContainer = styled.div`
  height: 548px;
  margin-top: 157px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function Tasks({ data }) {
  return (
    <>
      <Header>
        <ListTop>
          <p className="page-title">TO DO LIST</p>
          <button className="add-btn">+ ADD TASK</button>
        </ListTop>
      </Header>
      <ListContainer>
        {data.map((data) => (
          <Task key={data.id} data={data} />
        ))}
      </ListContainer>
      <Nav />
    </>
  );
}

export default Tasks;
