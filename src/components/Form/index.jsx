import { useState, useEffect } from 'react';
import axios from "axios";
import { FormSearch, Input, Button, Card, Image, NamePokemon } from './styles';
import { FaSearch } from "react-icons/fa";

function Form() {
  const [valueInput, setValueInput] = useState('');
  const [pokemonId, setPokemonId] = useState(null);
  const [pokemon, setPokemon] = useState({});
  
  const [imgSrc, setImgSrc] = useState('');

  const [pokemonNotFound, setPokemonNotFound] = useState(false);
  const checkPokemonExists = Object.keys(pokemon).length > 0;

  const apiPokemon = "https://pokeapi.co/api/v2/pokemon/" + valueInput;

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
      setPokemonNotFound(false);
      setImgSrc(baseImageUrl + responseId + ".png");
    })
    .catch(() => {
      setPokemonNotFound(true);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPokemonId(valueInput);
  }

  useEffect (() => {
    getPokemon();
    clearInput();
  },[pokemonId])

  return(
    <>
      <FormSearch onSubmit={handleSubmit}>
        <Input placeholder="Digite um número ou nome de um Pokemon" type="text" value={valueInput} onChange={getValueInput} />
        <Button><FaSearch/></Button>
      </FormSearch>

      {
        checkPokemonExists && (
          <>
            { 
              pokemonNotFound ? (
                <p>Pokemon não encontrado, tente novamente!</p>
              ) : (
                <Card>
                  <div>
                    <Image src={imgSrc} alt={pokemon.name} />
                    <NamePokemon>{`Nome: ` + pokemon.name}</NamePokemon>
                  </div>
                </Card>
              )
            }
          </>
        )
      }
    </>
  )
}

export default Form;