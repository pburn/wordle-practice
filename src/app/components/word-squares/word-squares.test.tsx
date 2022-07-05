import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { WordSquares } from './word-squares.container';

describe('<WordSquares />', () => {
  test('it should mount', () => {
    // render(<WordSquares />);
    
    const WordSquares = screen.getByTestId('WordSquares');

    expect(WordSquares).toBeInTheDocument();
  });
});