import { MockedProvider } from '@apollo/client/testing'
import { fireEvent, screen } from '@testing-library/react'
import { GraphQLError } from 'graphql'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import getAddress from '../../data/queries/getAddress'
import { render } from '../../test-utils'
import { Home } from './Home'


describe('home', () => {
  const successMock = {
    request: {
      query: getAddress,
      variables: {
        filter: {
          name: undefined,
        },
      },
    },
    result: {
      data: {
        cities: {
          cities: [
            {
              id: 129,
              name: 'Bryansk',
              country: 'Russia',
              visited: true,
              wishlist: false,
            },
          ],
        },
      },
    },
  }
  const errorMock = {
    request: {
      query: getAddress,
      variables: {
        filter: {
          name: undefined,
        },
      },
    },
    result: {
      data: {},
      errors: [new GraphQLError('Error!')],
    },
  }
  it('snapshot',() => {
    const wrapper = render(
      <MockedProvider mocks={[successMock]}>
        <Home />
      </MockedProvider>
    )
    expect(wrapper).toMatchSnapshot();
  })
  it('successful graphql query', async () => {
    const wrapper = render(
      <MockedProvider mocks={[successMock]}>
        <Home />
      </MockedProvider>
    )
    const formInput = screen.getByTestId('inputAddress')
    fireEvent.change(formInput, { target: { value: 'test' } })
    await new Promise(resolve => setTimeout(resolve, 100))

    const onSubmit = screen.getByTestId('submitButton')
    fireEvent.click(onSubmit)
    await new Promise(resolve => setTimeout(resolve, 100))

    expect(wrapper.getByText('Smart traveller')).toBeTruthy()
    expect(wrapper.getByText('Bryansk')).toBeTruthy()
  })

  it('fail graphql query', async () => {
    const wrapper = render(
      <MockedProvider mocks={[errorMock]}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </MockedProvider>
    )

    const onSubmit = screen.getByTestId('submitButton')
    fireEvent.click(onSubmit)
    await new Promise(resolve => setTimeout(resolve, 100))

    expect(wrapper.getByTestId('error')).toHaveTextContent('an error has occurred')
  })
})
