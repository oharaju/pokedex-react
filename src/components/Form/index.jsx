import { FormSearch, Input, Button } from './styles';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';

function Form() {

  const [valueInput, setValue] = useState('');

  const getValue = (e) => {
    e.preventDefault()
    setValue(e.target.value);


    console.log(e.target.value)
  }

  return(
    <>
      <FormSearch>
        <Input placeholder="Digite um número ou nome de um Pokemon" type="text" value={valueInput} onChange={getValue} />
        
        <Button><FaSearch/></Button>
      </FormSearch>
      {valueInput}
    </>
  )
}

export default Form;