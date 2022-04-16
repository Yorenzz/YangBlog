import * as React from "react";
import {useRoutes} from "react-router-dom";
import Login from "../component/login";
import Admin from "../component/admin";
import {Home} from "../component/Home";
import {Article} from "../component/Article";
import RequireAuth from "../context/RequireAuth";
import {DynamicEdit} from "../component/Edit/DynamicEdit";
import {Dynamic} from "../component/Article/Dynamic";
import {ArticleEdit} from "../component/Edit/ArticleEdit";
// const RequireAuth = React.lazy(() => import("../context/RequireAuth"))
export function Element() {
    return useRoutes([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/admin", element:
                    <RequireAuth><Admin/></RequireAuth>,
            children: [
                {
                    path: "Home",
                    element: <Home/>,
                },
                {
                    path: "article",
                    element: <Article/>
                },
                {
                    path:'dynamic',
                    element:<Dynamic/>
                },
                {
                    path:'articleEdit',
                    element:<ArticleEdit/>
                },
                {
                    path:'dynamicEdit',
                    element:<DynamicEdit/>
                }
            ]
        }
    ]
    );
}