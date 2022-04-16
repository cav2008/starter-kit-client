import React from 'react';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';
// Use test-utils file because it wraps the render method with provider and redux store.
import { render, screen } from '@utils/test-utils';

import App from './App';

describe('Home page', () => {
  it('example input should update text', async () => {
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

  it('should see pikachu', async () => {
    render(<App />);

    expect(screen.getByTestId('pokemon-name')).toHaveTextContent('ditto');

    await waitFor(() => {
      expect(screen.getByTestId('pokemon-name')).not.toHaveTextContent('ditto');
      expect(screen.getByTestId('pokemon-name')).toHaveTextContent('pikachu');
    });
  });
});
