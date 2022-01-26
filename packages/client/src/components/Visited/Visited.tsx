import { useQuery } from '@apollo/client'
import { Container, Heading, Spinner } from '@chakra-ui/react'
import type { FC } from 'react'
import React from 'react'
import getAddress from '../../data/queries/getAddress'
import FormTable from '../FormTable/FormTable'

export const Visited: FC = () => {
  const { loading, error, data } = useQuery(getAddress, {
    variables: {
      filter: {
        visited: true,
      },
    },
    fetchPolicy: 'network-only', //ensure we pull from DB, not cache
  })

  if (error) {
    return <p>an error has occured</p>
  }
  return (
    <>
      <Heading as="h1">Wish list</Heading>
      {loading ? <Spinner /> : <FormTable data={data?.cities.cities} total={data?.cities.total} />}

      <Container centerContent maxW="container.md" flexDir="row"></Container>
    </>
  )
}
