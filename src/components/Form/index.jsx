import { FormSearch, Input, Button } from './styles';
import { FaSearch } from "react-icons/fa";

function Form() {
  return(
    <>
      <FormSearch>
        <Input placeholder="teste" />
        <Button><FaSearch /></Button>
        <p>lalala</p>
      </FormSearch>
    </>
  )
}

export default Form;