import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const BasicTitle = styled.h1`
  text-transform: capitalize;
  color: maroon;
`;

function App() {
  return (
    <div className="App">
      <BasicTitle>Stylo G</BasicTitle>
    </div>
  );
}

export default App;
