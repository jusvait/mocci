import { render } from '@redwoodjs/testing/web'

import MocciLayout from './MocciLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MocciLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MocciLayout />)
    }).not.toThrow()
  })
})
