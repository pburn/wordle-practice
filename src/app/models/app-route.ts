import { createElement } from "react";
import { RouteProps } from "react-router-dom";
import { RootPage } from "../pages/root-page/root-page.container";

export class AppRouteClass {
    public pageRoutes : RouteProps[] = [
        {
            path: '/',
            element: createElement(RootPage)
        }
    ];
}

export const AppRoute = new AppRouteClass();