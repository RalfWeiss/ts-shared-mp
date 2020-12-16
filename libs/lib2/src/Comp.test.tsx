import React from 'react'
import {render, cleanup} from '@testing-library/react'
import {Comp} from './Comp'

describe('Comp', () => {
  afterEach(cleanup)

  it('should not throw', () => {
    const {container} = render(<Comp />)
    expect(container).toBeDefined()
  })
})