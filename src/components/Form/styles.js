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

export const Card = styled.div`
  background-color: #dbf6dba6;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 2%), 0 2px 4px rgb(0 0 0 / 2%), 0 4px 8px rgb(0 0 0 / 2%), 0 8px 16px rgb(0 0 0 / 2%), 0 16px 32px rgb(0 0 0 / 2%), 0 32px 64px rgb(0 0 0 / 2%);
  margin-bottom: 20px;
`

export const Image = styled.img`
  height: 250px;
  width: 250px;
`

export const NamePokemon = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 26px;
  text-align: center;
`