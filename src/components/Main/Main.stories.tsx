import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Main, { MainProps } from '.'

export default {
    title: 'Main',
    component: Main
} as Meta

export const Default: Story<MainProps> = (args) => <Main {...args} />

Default.args = {
    title: 'X Story',
    subtitle: 'a difficult to build boilerplate'
}
