import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('item is added', () => {
  render(<App />);
  const formElement = screen.queryByTestId('form')!;
  const inputElement = screen.queryByTestId('input')!;
  
  fireEvent.change(inputElement, { target: { value: 'test' } });
  fireEvent.submit(formElement);

  const todoItem = screen.queryByText('test');
  expect(todoItem).toBeInTheDocument();
});
