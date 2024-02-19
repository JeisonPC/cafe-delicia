import styled from "styled-components";

const PrimaryButton = styled.button`
  background-color: #F5BB70;
  border: 2px solid pink;
  border-radius: 5px;
  color: black;
  padding: 10px;
  box-shadow: 5px 5px 5px 0px lightgray;
`;
const Button = () => {
  return <PrimaryButton>¡Botón con estilo!</PrimaryButton>;
};

export default Button;
