import React from 'react';
import { render, screen } from '@testing-library/react';
import FilterSelect from './FilterSelect';

const filterListTest = [{
  name: 'test',
  code: 15
}]

function updateTest() {
  console.log("composant FilterSelct updateTest")
  //return true
}

test('renders learn react link', async () => {
  render(<FilterSelect filtersList={filterListTest} update={updateTest} />);  
  const FilterSelectElement = await screen.findByTestId('filter-select');
  expect(FilterSelectElement).toBeInTheDocument();
});
