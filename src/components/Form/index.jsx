import { useState } from 'react';
import axios from "axios";
import { FormSearch, Input, Button } from './styles';
import { FaSearch } from "react-icons/fa";

function Form() {

  const [valueInput, setValueInput] = useState('');
  const [pokemon, setPokemon] = useState({});

  console.log(pokemon)

  const apiPokemon = "https://pokeapi.co/api/v2/pokemon/" + valueInput;

  const getValueInput = (e) => {
    setValueInput(e.target.value);
  }

  function getPokemon() {
    axios.get(apiPokemon)
    .then((response) => { 
      setPokemon(response.data)
    })
    .catch((error) => console.log(error))
  }

  function handleSubmit(e) {
    e.preventDefault();

    getPokemon();
  }

  return(
    <>
      <FormSearch onSubmit={handleSubmit}>
        <Input placeholder="Digite um número ou nome de um Pokemon" type="text" value={valueInput} onChange={getValueInput} />
        <Button><FaSearch/></Button>
      </FormSearch>
      {
        pokemon && (
          <div>
            {pokemon.name}
          </div>
        )
      }
    </>
  )
}

export default Form;