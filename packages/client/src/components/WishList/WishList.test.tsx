import { MockedProvider } from '@apollo/client/testing'
import React from 'react'
import { render } from '../../test-utils'
import { WishList } from './WishList'

describe('FormInput', () => {
  it('snapshot', () => {
    const wrapper = render(
      <MockedProvider mocks={[]}>
        <WishList />
      </MockedProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
