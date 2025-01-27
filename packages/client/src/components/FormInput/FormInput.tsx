import { Search2Icon } from '@chakra-ui/icons'
import { IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'

type FormProps = {
  onSubmit?: (e: any) => void
  initialValues?: string
}

const FormInput: React.FC<FormProps> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <InputGroup>
        <Input data-testid="inputAddress"/>
        <InputRightElement>
          <IconButton aria-label="" data-testid="submitButton" type="submit" icon={<Search2Icon />} />
        </InputRightElement>
      </InputGroup>
    </form>
  )
}

export default FormInput
