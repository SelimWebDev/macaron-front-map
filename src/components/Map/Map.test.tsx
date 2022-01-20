import React from 'react';
import { render, screen } from '@testing-library/react';
import Map from './Map';

test('component map', () => {
  render(<Map />);
  const textMap = screen.getByText(/text map/i);
  console.log(textMap)
  expect(textMap).toBeInTheDocument();
});
