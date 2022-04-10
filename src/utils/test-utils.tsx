import React from 'react';
import { render as rtlRender, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
// Import your own reducer
import appStore from '../store';

function render(ui: React.ReactElement, { store = appStore, ...renderOptions } = {}): RenderResult {
  function Wrapper({ children }: { children: React.ReactElement }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
