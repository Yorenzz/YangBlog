import './App.css'
import Login from "../component/login";
import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Admin from "../component/admin";
import {Article} from "../component/Article";
import {Home} from "../component/Home";


function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Login/>}/>
                <Route path='/admin' exact element={<Admin/>}>
                    <Route path='' exact index element={<Home/>}/>
                    <Route path='article' exact element={<Article/>}/>
                </Route>
            </Routes>
        </Router>
    )
}
// React.render((
//     <Router history={History}>
//         <Route path="/" component={Login}>
//
//         </Route><Route path="admin" component={Admin} />
//     </Router>
// ), document.body)

export default App
