import React, { FunctionComponent, ReactElement } from 'react';
import styles from './root-page.module.scss';

interface RootPageRenderProps {}

export const RootPageRender: FunctionComponent<RootPageRenderProps> = (): ReactElement => {
  return (
    <div className={styles.RootPage} data-testid="RootPage">
      Root Page
    </div>
  )
}
