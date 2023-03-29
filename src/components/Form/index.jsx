import { useState } from 'react';
import axios from "axios";
import { FormSearch, Input, Button, Card, Image } from './styles';
import { FaSearch } from "react-icons/fa";

function Form() {
  const [valueInput, setValueInput] = useState('');
  const [namePokemon, setPokemon] = useState({});

  const [imgSrc, setImgSrc] = useState('');

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

      const baseImageUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';

      const idPokemon = response.data.id;
      const idToString = `${idPokemon}`;

      const numbersCharactersId = idToString.length;

      const numberMaxId = 3;
      const numberZerosBeforeId = "0".repeat(numberMaxId - numbersCharactersId);
      const responseId =  numberZerosBeforeId + response.data.id;

      setPokemon(response.data);
      setError(null);
      setImgSrc(baseImageUrl + responseId + ".png");
    })
    .catch(() => {
      setError(errorMessage);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    getPokemon();
    clearInput();
  }

  return(
    <>
      <FormSearch onSubmit={handleSubmit}>
        <Input placeholder="Digite um número ou nome de um Pokemon" type="text" value={valueInput} onChange={getValueInput} />
        <Button><FaSearch/></Button>
      </FormSearch>

      <Card>
        { 
          error ? (
            <p>{error}</p>
          ) : (
            <div>
              <p>{namePokemon.name}</p>
              <Image src={imgSrc} alt={namePokemon.name} />
            </div>
          )
        }
      </Card>
    </>
  )
}

export default Form;