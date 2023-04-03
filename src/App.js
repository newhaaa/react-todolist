import React, { useState } from "react";
import styled from "styled-components";
// import { Routes, Route } from "react-router-dom";

// import Nav from "./components/Nav";
import Tasks from "./pages/Tasks";
// import Onging from "./pages/Onging";
// import Complete from "./pages/Complete";
// import CompleteClear from "./pages/CompleteClear";
// import AddTask from "./pages/AddTask";

const AppContainer = styled.div`
  width: 393px;
  height: 852px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid orange;
`;

function App({ data }) {
  const [addData, setAddData] = useState({});

  return (
    <AppContainer>
      {/* <container>
        <Routes>
          <Route path="/all" element={<Tasks data={data} />} />
          <Route path="/" element={<Onging data={data} />} />
          <Route path="/done" element={<Complete />} />
        </Routes>
      </container>
      <Nav /> */}
      {/* <AddTask setAddData={setAddData} /> */}
      <Tasks data={data} />
    </AppContainer>
  );
}

export default App;
