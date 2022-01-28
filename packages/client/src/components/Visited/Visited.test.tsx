import { MockedProvider } from '@apollo/client/testing'
import React from 'react'
import { render } from '../../test-utils'
import { Visited } from './Visited'

describe('FormInput', () => {
  it('snapshot', () => {
    const wrapper = render(
      <MockedProvider mocks={[]}>
        <Visited />
      </MockedProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
