import React, { FunctionComponent, ReactElement } from 'react';
import logo from './logo.svg';
import './App.scss';

export interface AppRenderProps {}

export const AppRender: FunctionComponent<AppRenderProps> = (props): ReactElement => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/app/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
