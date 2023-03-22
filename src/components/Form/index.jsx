import { useState } from 'react';
import axios from "axios";
import { FormSearch, Input, Button } from './styles';
import { FaSearch } from "react-icons/fa";

function Form() {

  const [valueInput, setValueInput] = useState('');
  const [pokemon, setPokemon] = useState({});

  const apiPokemon = "https://pokeapi.co/api/v2/pokemon/" + valueInput;

  const [error, setError] = useState(null);
  const errorMessage = "Pokemon não encontrado, tente novamente!";

  const getValueInput = (e) => {
    setValueInput(e.target.value);
  }

  function clearInput() {
    setValueInput('');
  }

  function getPokemon() {
    axios.get(apiPokemon)
    .then((response) => { 
      setPokemon(response.data);
      setError(null);
    })
    .catch(() => {
      setError(errorMessage);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    getPokemon();
    clearInput()
  }

  return(
    <>
      <FormSearch onSubmit={handleSubmit}>
        <Input placeholder="Digite um número ou nome de um Pokemon" type="text" value={valueInput} onChange={getValueInput} />
        <Button><FaSearch/></Button>
      </FormSearch>

      { 
        error ? (
          <p>{error}</p>
        ) : (
          <p>{pokemon.name}</p>
        )
      }
    </>
  )
}

export default Form;