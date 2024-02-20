import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from '../App';

test('renders App correctly', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /react/i });
  expect(headingElement).toBeInTheDocument();
});
