import { render, screen } from '@testing-library/react';
import ListItem from './ListItem';

test('renders the Item', () => { 
  const deleteItem = () => true;
  const editItem = () => true;
  const item ={
      name: 'sample name',
      description: 'sample description',
      price: 35000
  }
  const updateItem = () => true;
  render(<ListItem item={item} deleteItem={deleteItem} editItem={editItem}/>);
  const nam = screen.getByText(/sample name/);
  const desc = screen.getByText(/sample description/);
  const pricing = screen.getByText(/35000/);
  expect(nam).toBeInTheDocument();
  expect(desc).toBeInTheDocument();
  expect(pricing).toBeInTheDocument();
});