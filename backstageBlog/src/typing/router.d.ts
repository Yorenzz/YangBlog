import { LazyExoticComponent, ReactNode } from "react";

interface Router {
    name?: string,
    path: string,
    children?: Array<Router>,
    element: ReactNode,
}

export default Router