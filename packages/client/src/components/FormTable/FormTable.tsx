import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

type FormTableProps = {
  data: [Cities] | null
  total?: number
}
type Cities = {
  country: string
  id: number
  name: string
  visited: boolean
  wishlist: boolean
}

const FormTable: React.FC<FormTableProps> = ({ data, total }) => {
  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>City</Th>
            <Th>Country</Th>
            <Th>Id</Th>
            <Th>Visited</Th>
            <Th>Wishlist</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.map((city: Cities) => {
              return (
                <Tr>
                  <Td>{city.name}</Td>
                  <Td>{city.country}</Td>
                  <Td>{city.id}</Td>
                  <Td>{JSON.stringify(city.visited)}</Td>
                  <Td>{JSON.stringify(city.wishlist)}</Td>
                </Tr>
              )
            })}
        </Tbody>
      </Table>
      <Table>
        <Thead>
          <Tr>
            <Th>Total cities matched</Th>
            <Td>{total}</Td>
          </Tr>
        </Thead>
      </Table>
    </>
  )
}

export default FormTable
