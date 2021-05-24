import { Story, Meta } from '@storybook/react'
import { RecoilRoot } from 'recoil'

import App from './App'

export default {
  title: 'App',
  component: App,
} as Meta

export const Primary: Story = () => (
  <RecoilRoot>
    <App />
  </RecoilRoot>
)
