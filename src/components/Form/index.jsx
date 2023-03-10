import { FormSearch, Input, Button } from './styles';
import { FaSearch } from "react-icons/fa";

function Form() {
  return(
    <>
      <FormSearch>
        <Input placeholder="Digite um número ou nome de um Pokemon" />
        <Button><FaSearch /></Button>
        <p>Teste Ghost</p>
      </FormSearch>
    </>
  )
}

export default Form;