import React, { useState } from "react";
import styled from "styled-components";

const AddContainer = styled.div`
  width: 317px;
  height: 453px;
  border: 2px solid black;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;

  .add-top {
    display: flex;
    height: 39px;

    > .add-title {
      font-size: 25px;
      text-align: center;
    }
    > button {
      margin-top: 21px;
      margin-left: 20px;
      width: 33px;
      height: 33px;
      border-radius: 50%;
      background-color: #ecbc57;
      font-size: 18px;
    }
  }

  .input-area {
    margin: 19px 38px 45px 38px;
    > p {
      margin: 19px 0px 10px 0px;
    }
  }
  .input-taskname {
    width: 242px;
    height: 101px;
    background-color: #f0f0f0;
    border: 0px;
    border-radius: 15px;
  }

  .input-tasktime {
    width: 242px;
    height: 38px;
    background-color: #f0f0f0;
    border: 0px;
    border-radius: 15px;
  }

  > button {
    /* margin-top: px; */
    width: 246px;
    height: 52px;
    border: 1.5px solid black;
    border-radius: 18px;
    font-size: 20px;
    background-color: #8bb897;
  }
`;

function AddTask({ setAddData }) {
  const [taskName, setTaskName] = useState("");
  const [taskTime, setTaskTime] = useState("");
  console.log(taskName, taskTime);

  return (
    <>
      <AddContainer>
        <div className="add-top">
          <p className="add-title">Things to do!</p>
          <button>X</button>
        </div>
        <div className="input-area">
          <p>To Do</p>
          <input
            className="input-taskname"
            type="text"
            name="taskName"
            placeholder="Plz, Enter what you need to do"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <p>Time</p>
          <input
            className="input-tasktime"
            type="text"
            name="taskTime"
            placeholder="Plz, Enter a time"
            value={taskTime}
            onChange={(e) => setTaskTime(e.target.value)}
          />
        </div>
        <button type="submit" onClick={} >ADD</button>
      </AddContainer>
    </>
  );
}

export default AddTask;
