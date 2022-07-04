import { createElement, FunctionComponent, ReactElement } from "react";
import { RootPageRender } from "./root-page.render";

export const RootPage: FunctionComponent<{}> = (): ReactElement => {
    return createElement(RootPageRender);
}