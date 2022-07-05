import { Typography } from '@mui/material';
import React, { FunctionComponent, ReactElement } from 'react';
import styles from './word-squares.module.scss';

export interface WordSquaresRenderProps {
  capturedString: string;
  maxLength: number;
}

export const WordSquaresRender: FunctionComponent<WordSquaresRenderProps> = (props): ReactElement => {
  return (
    <div className={styles.WordSquares} data-testid="WordSquares">
      {Array.from({length: props.maxLength}).map((o, i) => {
        return (<Typography className={styles.letter} key={`letter-box-${i}`}>{props.capturedString[i]}</Typography>)
      })}
    </div>
  )
}
