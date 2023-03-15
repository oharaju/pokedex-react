import { useState, useEffect } from 'react';
import axios from "axios";
import { FormSearch, Input, Button } from './styles';
import { FaSearch } from "react-icons/fa";

function Form() {

  const [valueInput, setValue] = useState('');
  const apiPokemon = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() =>{
    getPokemon();
  })
  
  const getPokemon = () =>{
    axios.get(apiPokemon)
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
  }

  const getValueInput = (e) => {
    e.preventDefault()
    setValue(e.target.value);
  }

  return(
    <>
      <FormSearch>
        <Input placeholder="Digite um número ou nome de um Pokemon" type="text" value={valueInput} onChange={getValueInput} />
        <Button><FaSearch/></Button>
      </FormSearch>
      {valueInput}
    </>
  )
}

export default Form;