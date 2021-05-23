import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should render the button on app component', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /react spectrum/i } )
  expect(buttonElement).toBeInTheDocument();
});
