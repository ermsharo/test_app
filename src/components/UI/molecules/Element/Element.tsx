import React, { useState } from 'react';
import styled from "styled-components";



export interface FormInputs {
    searchString : string, 
    filterString : string

}


 const Input = styled.input`
  /* font-family: ${Fonts.primaryFont} */

  font-size: 1.2rem;
  border-radius: 0.2rem;
  border: 0;
  box-sizing: border-box;
  width: calc(100%);
  margin-top: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  /* background-color: ${Colors.thirthBackground}; */
  /* color: ${Colors.primaryfontColor}; */
  &::placeholder {
    /* color: ${Colors.primaryfontColor};
    font-family: ${Fonts.primaryFont} */
  }
  &:focus{
    /* outline: 0.2rem solid  ${Colors.firstBackground}; */
    outline-style: dashed;
  }
`;

function Element() {

    const [formInputs, setFormInputs] = useState<FormInputs>({
        searchString: "",
        filterString: "",
      });

      function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setFormInputs({
          ...formInputs,
          [e.target.name]: value,
        });
      }
    
    <Input
    type="text"
    placeholder="Nome do usuário"
    name="username"
    onChange={handleChange}
    value={formInputs.searchString}
    required
  />
    return <>Element</>;
};

export default Element;
