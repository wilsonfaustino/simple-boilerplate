import React from 'react'
import { render, screen } from '@testing-library/react'
import Main from '.'

test('should render main component', () => {
    render(<Main title='X Story' subtitle='a difficult to build boilerplate' />)
    const headingElement = screen.getByRole('heading', { name: /x story/i })
    const sectionElement = screen.getByText(/boilerplate/i)
    expect(headingElement).toBeInTheDocument()
    expect(sectionElement).toBeInTheDocument()
})
