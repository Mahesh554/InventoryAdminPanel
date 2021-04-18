import { render, screen } from '@testing-library/react';
import CreateItem from './CreateItem';

test('renders the form with all fields', () => {
  const modal = true;  
  const toggle = () => true;
  const saveItem = (item) => true;
  render(<CreateItem modal={modal} toggle={toggle} saveItem={saveItem}/>);
  const nameField = screen.getByText(/Name/);
  const descField = screen.getByText(/Description/);
  const priceField = screen.getByText(/Price/);
  expect(nameField).toBeInTheDocument();
  expect(descField).toBeInTheDocument();
  expect(priceField).toBeInTheDocument();
  const button = screen.getByText('Add Item')
  expect(button).toBeInTheDocument();
});