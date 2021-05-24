import { RecoilRoot } from 'recoil'
import { render, screen } from 'utils/test-utils'
import App from './App'

test('renders learn react link', () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  )
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
