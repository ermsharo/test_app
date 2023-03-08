import React, { useEffect, useState } from "react";
import { itemData } from "./type";
import styled from "styled-components";

type OnFilter = (searchParameter: string) => void;

export interface FormInputs {
  items: itemData[];
  onFilter: OnFilter;
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

  &:focus {
    outline-style: dashed;
  }
`;

const BoardBox = styled.div`
  width: 60vw;
  margin: auto;
  padding: 2rem;
`;

const SearchBox = styled.div``;

const ElementsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Element = styled.div`
  border: 1px solid black;
`;

function ExampleComp({items, onFilter} : FormInputs) {
  const [search, setSearch] = useState<string>("");


  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    console.log("value", value);
    onFilter(value);
    setSearch(value);
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
            value={search}
            required
          />
        </SearchBox>

        <ElementsBox></ElementsBox>
      </BoardBox>
    </div>
  );
}

export default ExampleComp;
