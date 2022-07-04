import { FunctionComponent, ReactElement, StrictMode } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, RouteProps } from 'react-router-dom';
import { AppRoute } from './models/app-route';

export interface AppRenderProps {}

export const AppRender: FunctionComponent<AppRenderProps> = (props): ReactElement => {
  return (
    // StrictMode helps with identifying additional issues for the application (https://reactjs.org/docs/strict-mode.html)
    <StrictMode>
      <BrowserRouter>
        <Routes>
          {AppRoute.pageRoutes.map((route: RouteProps, i) => <Route key={`route-${i}`} {...route}/>)}
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
