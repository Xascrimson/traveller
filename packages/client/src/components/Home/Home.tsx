import { useLazyQuery } from '@apollo/client'
import { Container, Heading, Spinner, VStack } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import getAddress from '../../data/queries/getAddress'
import FormInput from '../FormInput/FormInput'
import FormTable from '../FormTable/FormTable'

export const Home: FC = () => {
  const [address, setAddress] = useState()
  const [queryAddress, { loading, error, data }] = useLazyQuery(getAddress)

  const handleSubmit = (e: any) => {
    // setAddress(e.target[0].value)
    queryAddress({
      variables: {
        filter: {
          name: e.target[0].value,
        },
      },
    })
    e.preventDefault()
  }

  if (error) {
    return <p>an error has occured</p>
  }

  return (
    <VStack spacing="8">
      <Heading as="h1">Smart traveller</Heading>
      <Container maxW="container.md">
        <FormInput onSubmit={handleSubmit} />
        <br />
        {loading ? <Spinner /> : <FormTable data={data?.cities.cities} total={data?.cities.total} />}
      </Container>
    </VStack>
  )
}
