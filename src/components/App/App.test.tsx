import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

test('renders learn react link', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
    
  );
  const AppElement = await screen.findByTestId('App');
  expect(AppElement).toBeInTheDocument();
});
