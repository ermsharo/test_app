import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
export interface FormInputs {
  search: string;
  filter: string;
}

const Input = styled.input`
  font-size: 1.2rem;
  border-radius: 0.2rem;
  border: 0;
  box-sizing: border-box;
  width: calc(100%);
  margin-top: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid black;

  &::placeholder {
  }
  &:focus {
    outline-style: dashed;
  }
`;

const BoardBox = styled.div`
  width: 60vw;
  margin: auto;
  padding: 2rem;
`;

const Button = styled.div`
  width: 60vw;
  margin: auto;
  padding: 2rem;
`;

const SearchBox = styled.div`
  display: grid;
  grid-template-columns: 60% 20% 20%;
  grid-gap: 1rem;
`;

function App() {
  const [formInputs, setFormInputs] = useState<FormInputs>({
    search: "",
    filter: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setFormInputs({
      ...formInputs,
      [e.target.name]: value,
    });
  }

  return (
    <div className="App">
      <BoardBox>
        <SearchBox>
          <Input
            type="text"
            placeholder="Search text here"
            name="search"
            onChange={handleChange}
            value={formInputs.search}
            required
          />
          <button>Search</button>
          <div>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </SearchBox>
      </BoardBox>
    </div>
  );
}

export default App;
