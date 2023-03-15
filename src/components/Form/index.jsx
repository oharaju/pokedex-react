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
    setValue(e.target.value);
  }

  const clearInputpokemon = () => {
    setValue("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    getPokemon();
    // clearInputpokemon();
  }

  return(
    <>
      <FormSearch onSubmit={handleSubmit}>
        <Input placeholder="Digite um número ou nome de um Pokemon" type="text" value={valueInput} onChange={getValueInput} />
        <Button><FaSearch/></Button>
      </FormSearch>
      
      <div>
        {valueInput}
      </div>
    </>
  )
}

export default Form;