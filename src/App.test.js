import { cleanup, render, screen } from '@testing-library/react';
import App from './App';

test('renders header title and button', () => {
  render(<App />);
  const headerEl = screen.getByText(/Inventory Admin Panel/);
  expect(headerEl).toBeInTheDocument();
  const button = screen.getByText('Add New Item')
  expect(button).toBeInTheDocument();
});

cleanup();
