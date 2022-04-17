import React from 'react';
import { render as rtlRender, RenderResult } from '@testing-library/react';
import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from '@slices/reducer';
// Import your own reducer
import appStore from '../store';

function render(
  ui: React.ReactElement,
  {
    store = configureStore({
      reducer: rootReducer,
    }),
    ...renderOptions
  } = {}
): RenderResult {
  function Wrapper({ children }: { children: React.ReactElement }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
