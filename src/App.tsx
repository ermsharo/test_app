import React, { useEffect, useState } from "react";
import axios from "axios";
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

const ProductRequest = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<boolean | String>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get<any>(
        `https://fakestoreapi.com/products`
      );
      setData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error with Message: " + error.message);
        setError(true);
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return [data, error, loading] as const;
};

function App() {
  const [formInputs, setFormInputs] = useState<FormInputs>({
    search: "",
    filter: "",
  });
  const [filteredData, setFilteredData] = useState<any>();
  const [data, error, loading] = ProductRequest();

  useEffect(() => {
    if (data !== null) {
      console.log("temos data", data);
      
    }
  }, [data]);

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
      {loading && <div>loading</div>}
      {error && <div>error</div>}
      {data && (
        <div>
          {data.map((item: any, index: number) => {
            return <div key={index}>{item.title}</div>;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
