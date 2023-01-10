import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 15px;
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid black;
`;
export const Input = styled.input`
  width: 300px;
  justify-content: center;

  :hover {
    border-color: lightskyblue;
  }
`;
export const Button = styled.button`
  width: 310px;
  text-align: center;
  justify-content: center;
  background-color: lightgrey;
  border-radius: 5px;
  border: none;
  :hover {
    background-color: dodgerblue;
    border: none;
  }
`;
