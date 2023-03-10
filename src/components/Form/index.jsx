import { FormSearch, Input, Button } from './styles';
import { FaSearch } from "react-icons/fa";

function Form() {
  return(
    <>
      <FormSearch>
        <Input placeholder="Digite um número ou nome de um Pokemon" />
        <Button><FaSearch /></Button>
        <p>lalala</p>
      </FormSearch>
    </>
  )
}

export default Form;