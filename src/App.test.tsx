import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@utils/test-utils';
import App from './App';

test('example input should update text', async () => {
  render(<App />);

  // get elements from DOM
  const exampleInput: HTMLInputElement = screen.getByLabelText(/example input/i);
  const exampleResult = screen.getByTestId('example-result');

  // type value into input
  await userEvent.type(exampleInput, 'new text');

  // check if text is updated
  expect(exampleInput.value).toBe('new text');
  expect(exampleResult.textContent).toBe('new text');
});
