import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('has text "React Component"', () => {
  const {getByText} = render(<App />)
  const comp = getByText("React Component")
  expect(comp).toBeDefined()
})