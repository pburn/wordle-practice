import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { RootPage } from './root-page.container';

describe('<RootPage />', () => {
  test('it should mount', () => {
    render(<RootPage />);
    
    const rootPage = screen.getByTestId('RootPage');

    expect(rootPage).toBeInTheDocument();
  });
});