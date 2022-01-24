import { Container, Heading, VStack } from '@chakra-ui/react'
import { FC, useEffect } from 'react'
import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import getAddress from '../../data/queries/getAddress'
import { useLazyQuery } from '@apollo/client'

export const Home: FC = () => {
  const [address, setAddress] = useState()
  const [queryAddress, { loading, error, data }] = useLazyQuery(getAddress)

  const handleSubmit = (e: any) => {
    setAddress(e.target[0].value)
    queryAddress({
      variables: {
        filter: {
          name: e.target[0].value,
        },
      },
    })

    e.preventDefault()
  }

  useEffect(() => {
    if (data) {
      console.log('data', data)
    }
  }, [data])

  return (
    <VStack spacing="8">
      <Heading as="h1">Smart traveller</Heading>
      <Container maxW="container.md">
        <FormInput onSubmit={handleSubmit} />
      </Container>
    </VStack>
  )
}
