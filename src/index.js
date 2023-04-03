import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import data from "./data/data";
// import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

const BodyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <BodyBox>
      <App data={data} />
    </BodyBox>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
