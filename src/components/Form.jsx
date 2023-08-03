// import React from "react";
import styled from "@emotion/styled";
import { useSelectMonedas } from "../Hooks/useSelectMonedas";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #747dfe;
    cursor: pointer;
  }
`;

const Form = () => {
  const [SelectMonedas] = useSelectMonedas();

  SelectMonedas();

  return (
    <Form>
      <InputSubmit type="submit" value="cotizador" />
    </Form>
  );
};

export default Form;
