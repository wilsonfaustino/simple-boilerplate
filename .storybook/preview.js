import React from 'react'
import { Provider, defaultTheme } from '@adobe/react-spectrum'

export const decorators = [
    (Story) => (
        <Provider theme={defaultTheme}>
        <Story />
        </Provider>
    )
]

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
        color: /(background|color)$/i,
        date: /Date$/
        }
    }
}