import { render, screen } from '@testing-library/react';
import EditItem from './EditItem';

test('renders the form with all fields', () => {
  const modal = true;  
  const toggle = () => true;
  const item ={
      name: 'sample Name',
      desciption: 'sample description',
      price: 35000
  }
  const updateItem = () => true;
  render(<EditItem modal={modal} toggle={toggle} item={item} updateItem={updateItem}/>);
  const nameField = screen.getByText(/Name/);
  const descField = screen.getByText(/Description/);
  const priceField = screen.getByText(/Price/);
  expect(nameField).toBeInTheDocument();
  expect(descField).toBeInTheDocument();
  expect(priceField).toBeInTheDocument();
  const button = screen.getByText('Update Item')
  expect(button).toBeInTheDocument();
});