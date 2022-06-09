import { render } from '@redwoodjs/testing/web'

import MocciCase from './MocciCase'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MocciCase', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MocciCase />)
    }).not.toThrow()
  })
})
