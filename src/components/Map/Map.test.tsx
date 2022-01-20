import React from 'react';
import { render, screen } from '@testing-library/react';
import Map from './Map';

test('component map', async () => {
  render(<Map />);
  const idMap = await screen.findByTestId('Map');
  expect(idMap).toBeInTheDocument();
});
