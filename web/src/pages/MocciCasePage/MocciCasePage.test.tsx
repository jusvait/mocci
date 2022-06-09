import { render } from '@redwoodjs/testing/web'

import MocciCasePage from './MocciCasePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MocciCasePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MocciCasePage />)
    }).not.toThrow()
  })
})
