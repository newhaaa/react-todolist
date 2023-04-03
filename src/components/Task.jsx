import React from "react";
import styled from "styled-components";

const Taskbox = styled.div`
  width: 331px;
  height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid black;
  border-radius: 30px;
  margin-bottom: 17px;

    /* > .checkbox {
    width: 44px;
    height: 44px;
    border: 1.5px solid black;
    border-radius: 50%;
    background: #ecbc57;
  } */
    >;

  .taskName {
    width: 163px;
    font-size:20px;
  }
  .taskBtn {
    width: 87px;

    button {
      border: 0px;
      background-color: white;
    }
  }
`;

function Task({ data }) {
  return (
    <>
      <Taskbox>
        <input type="checkbox" />
        <div className="taskName">{data.taskName}</div>
        <div className="taskBtn">
          <button>수정</button>
          <button>삭제</button>
        </div>
      </Taskbox>
    </>
  );
}

export default Task;
