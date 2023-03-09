import styled from "styled-components";

export const FormSearch = styled.form`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
`

export const Input = styled.input`
  padding: 16px;
  border-radius: 10px 0 0 10px;
  border: none;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  width: 100%;
  outline: none;

  &::placeholder {
    font-style: italic;
  }
`

export const Button = styled.button`
  background-color: #FFFFFF;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 0 10px 10px 0;
  padding: 5px 20px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #ffffff8e;
  }
`