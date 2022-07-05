import React, { FunctionComponent, ReactElement } from 'react';
import { WordSquares } from '../../components';
import styles from './root-page.module.scss';

interface RootPageRenderProps {}

export const RootPageRender: FunctionComponent<RootPageRenderProps> = (): ReactElement => {
  return (
    <div className={styles.RootPage} data-testid="RootPage">
      <WordSquares />
    </div>
  )
}
