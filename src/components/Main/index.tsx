import React from 'react'
import Upload from '@spectrum-icons/illustrations/Upload'
import { Content, Heading, IllustratedMessage } from '@adobe/react-spectrum'

export type MainProps = {
    title: string
    subtitle: string
}

const Main = ({ title, subtitle }: MainProps) => (
    <IllustratedMessage>
        <Upload />
        <Heading>{title}</Heading>
        <Content>{subtitle}</Content>
    </IllustratedMessage>
)

export default Main
